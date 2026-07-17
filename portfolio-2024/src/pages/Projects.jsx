import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
import projects from '../data/projects.json';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { useNavbar } from '../context/NavbarContext';
import { slugify } from '../utils/slug';

const Projects = () => {
  const { isCollapsed } = useNavbar();
  const navigate = useNavigate();
  const scrollerRef = useRef(null);

  useGSAP(() => {
    const timer = setTimeout(() => {
      if (!scrollerRef.current) return;
      const elements = gsap.utils.toArray('.gsap-animate-up');
      elements.forEach((el) => {
        gsap.fromTo(el, 
          { y: 40, opacity: 0, scale: 0.95, filter: 'blur(8px)' },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              scroller: scrollerRef.current,
              start: 'top 85%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      });
      const textElements = gsap.utils.toArray('.gsap-animate-text');
      textElements.forEach((el) => {
        gsap.fromTo(el, 
          { y: -15, opacity: 0, filter: 'blur(10px)' },
          {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              scroller: scrollerRef.current,
              start: 'top 85%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      });
      ScrollTrigger.refresh();
    }, 350);
    return () => clearTimeout(timer);
  }, { scope: scrollerRef });

  return (
    <div ref={scrollerRef} className={`h-full w-full overflow-y-auto scrollbar-thin scrollbar-webkit md:mt-0 mt-4 px-4 py-5 ${isCollapsed ? 'opacity-100' : 'md:opacity-100 opacity-10'}`}>
      <div className={`flex flex-col items-start justify-start ${isCollapsed ? 'lg:w-[80%] mx-auto' : 'w-full'}`}>
        <Button className="w-auto !mt-0 mb-4 gsap-animate-up" text={"← Back to Home"} onClick={() => navigate('/')} />
        <h1 className="header-2 mb-2 gsap-animate-text">All Projects</h1>
        <div className="w-full grid gap-6 mt-2 grid-cols-1 md:grid-cols-3 md:grid-flow-row-dense items-start">
          {(() => {
            let largeCount = 0;
            return projects.map((project, index) => {
              let spanClass = '';
              if (project.size === 'large') {
                spanClass = largeCount % 2 === 0 ? 'md:col-span-2' : 'md:col-span-2 md:col-start-2';
                largeCount++;
              }
              return (
                <div key={index} className={`gsap-animate-up h-full ${spanClass}`}>
                  <Link to={`/projects/${slugify(project.name)}`} className="block h-full hover:scale-[1.01] transition-transform">
                    <ProjectCard project={project} />
                  </Link>
                </div>
              );
            });
          })()}
        </div>
      </div>
    </div>
  );
};

export default Projects;
