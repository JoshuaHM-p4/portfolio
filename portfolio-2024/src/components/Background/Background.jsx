import { useEffect, useRef } from "react";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // Import OrbitControls

const Background = () => {
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    const mount = sceneRef.current;

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.set(0,0,0);
    // camera.position.set(3, 5, 20);
    // camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Create Cube
    // const cubeGeometry = new THREE.BoxGeometry(10, 10, 10);
    // const cubeMaterial = new THREE.MeshBasicMaterial({ color: "#ffffff" });
    // const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    // const cube_amplitude = 1;
    // const cube_speed = 1;
    // scene.add(cube);

    // Create blob
    const blobGeometry = new THREE.IcosahedronGeometry(2, 20);
    const blobMaterial = new THREE.ShaderMaterial({
      uniforms: {
        u_intensity: {
          value: 1
        },
        u_time: {
          value: 0.0
        },
        color1: {
          value: new THREE.Color("#FFA752")
        },
        color2: {
          value: new THREE.Color("#F94348")
        },
        color3: {
          value: new THREE.Color("#6C3C9D")
        }
      },
      vertexShader: `
      uniform float u_intensity;
      uniform float u_time;

      varying vec2 vUv;
      varying float vDisplacement;

      // Classic Perlin 3D Noise
      // by Stefan Gustavson
      //
      vec4 permute(vec4 x) {
          return mod(((x*34.0)+1.0)*x, 289.0);
      }

      vec4 taylorInvSqrt(vec4 r) {
          return 1.79284291400159 - 0.85373472095314 * r;
      }

      vec3 fade(vec3 t) {
          return t*t*t*(t*(t*6.0-15.0)+10.0);
      }

      float cnoise(vec3 P) {
          vec3 Pi0 = floor(P); // Integer part for indexing
          vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
          Pi0 = mod(Pi0, 289.0);
          Pi1 = mod(Pi1, 289.0);
          vec3 Pf0 = fract(P); // Fractional part for interpolation
          vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
          vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
          vec4 iy = vec4(Pi0.yy, Pi1.yy);
          vec4 iz0 = Pi0.zzzz;
          vec4 iz1 = Pi1.zzzz;

          vec4 ixy = permute(permute(ix) + iy);
          vec4 ixy0 = permute(ixy + iz0);
          vec4 ixy1 = permute(ixy + iz1);

          vec4 gx0 = ixy0 / 7.0;
          vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
          gx0 = fract(gx0);
          vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
          vec4 sz0 = step(gz0, vec4(0.0));
          gx0 -= sz0 * (step(0.0, gx0) - 0.5);
          gy0 -= sz0 * (step(0.0, gy0) - 0.5);

          vec4 gx1 = ixy1 / 7.0;
          vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
          gx1 = fract(gx1);
          vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
          vec4 sz1 = step(gz1, vec4(0.0));
          gx1 -= sz1 * (step(0.0, gx1) - 0.5);
          gy1 -= sz1 * (step(0.0, gy1) - 0.5);

          vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
          vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
          vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
          vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
          vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
          vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
          vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
          vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

          vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
          g000 *= norm0.x;
          g010 *= norm0.y;
          g100 *= norm0.z;
          g110 *= norm0.w;
          vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
          g001 *= norm1.x;
          g011 *= norm1.y;
          g101 *= norm1.z;
          g111 *= norm1.w;

          float n000 = dot(g000, Pf0);
          float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
          float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
          float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
          float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
          float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
          float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
          float n111 = dot(g111, Pf1);

          vec3 fade_xyz = fade(Pf0);
          vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
          vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
          float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
          return 2.2 * n_xyz;
      }

      // End of Perlin Noise Code

      void main() {
          vUv = uv;

          vDisplacement = cnoise(position * 0.3 + vec3(3.0 * u_time));

          vec3 newPosition = position + normal * (u_intensity * vDisplacement * 1.5);

          vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectedPosition = projectionMatrix * viewPosition;

          gl_Position = projectedPosition;
      }
      `,
      fragmentShader: `
      uniform float u_intensity;
      uniform float u_time;
      uniform vec3 color1;
      uniform vec3 color2;
      uniform vec3 color3;

      varying vec2 vUv;
      varying float vDisplacement;
      void main() {
        float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);

        // Use vUv.y as blend base, but modify it with distortion
        float y = clamp(vUv.y + distort * 0.1, 0.0, 1.0);

        // Sharpen the transition using a power curve or tighter smoothstep
        float blend1 = smoothstep(0.0, 0.4, y);
        float blend2 = smoothstep(0.4, 0.8, y);

        // First blend: color1 → color2
        vec3 mixed1 = mix(color1, color2, blend1);

        // Second blend: (result) → color3
        vec3 finalColor = mix(mixed1, color3, blend2);

        // Output final color
        gl_FragColor = vec4(finalColor, 1.0);
      }
      `,
    });
    const maxBlobs = 8;
    const blobs = [];
    for (let i = 0; i < maxBlobs; i++) {
      const angle = (i / maxBlobs) * Math.PI * 2;
      const radius = 5 + Math.random() * 10;
      const y = -5 + Math.random() * 10;

      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      const blob = new THREE.Mesh(blobGeometry, blobMaterial.clone());
      blob.position.set(x, y, z);

      // Save original Y and some motion properties
      blob.userData = {
        baseY: y,
        floatSpeed: 0.5 + Math.random() * 1,
        floatHeight: 0.5 + Math.random() * 1.5,
        rotationSpeed: 0.005 + Math.random() * 0.02,
        phaseOffset: Math.random() * Math.PI * 2,
      };

      scene.add(blob);
      blobs.push(blob);
    }

    const axesHelper = new THREE.AxesHelper(5); // 5 is the length of the axes
    scene.add(axesHelper);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      blobs.forEach((blob) => {
        const { baseY, floatSpeed, floatHeight, rotationSpeed, phaseOffset } = blob.userData;

        // Floating motion and rotation
        blob.rotation.z += rotationSpeed;
        blob.position.y = baseY + floatHeight * Math.sin(floatSpeed * time + phaseOffset);

        // Animate blob deformation
        blob.material.uniforms.u_time.value = 0.1 * performance.now() * 0.001;
      });
      cameraRef.current.rotation.y += 0.001;
      cameraRef.current.rotation.x += 0.0005;

      renderer.render(scene, camera);
    };


    animate();


    // Handle mouse movement
    const handleMouseMove = (event) => {
      if (cameraRef.current) {
        const mouseX = -(event.clientX / window.innerWidth) + 1;
        const mouseY = -(event.clientY / window.innerHeight) + 1;

        // Adjust the camera rotation based on mouse position
        cameraRef.current.rotation.x = mouseY * Math.PI / 6;  // Max rotation of PI/4 on the Y-axis
        cameraRef.current.rotation.y = mouseX * Math.PI / 6;  // Max rotation of PI/4 on the X-axis
      }
    };
    // Add event listener for mouse move
    window.addEventListener('mousemove', handleMouseMove);

    // Handle window resize
    const handleResize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      // window.removeEventListener('mousemove', handleMouseMove);
      mount.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="background">
      <div ref={sceneRef} style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0 }} />
    </div>
  );
};

export default Background;
