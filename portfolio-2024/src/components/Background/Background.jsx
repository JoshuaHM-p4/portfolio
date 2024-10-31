import { useEffect, useRef } from "react";
import * as THREE from 'three';

const Background = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const mount = sceneRef.current;

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.z = 20;
    camera.position.y = -5;
    camera.position.x = -10;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Create a torus
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshBasicMaterial({ color: "#ffff" });
    const torus = new THREE.Mesh(geometry, material);

    scene.add(torus);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.02;
      torus.rotation.z += 0.01;
      renderer.render(scene, camera);
    };

    animate();

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
      mount.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="background">
      <div ref={sceneRef} style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0}} />
    </div>
  );
}

export default Background;
