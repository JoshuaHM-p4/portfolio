import { Link, useNavigate } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import SeeAllButton from '../components/SeeAllButton';
import { useNavbar } from '../context/NavbarContext';
import { slugify } from '../utils/slug';
import projects from '../data/projects.json';

const Projects = () => {
  const { isCollapsed } = useNavbar();
  const navigate = useNavigate();

  return (
    <section id="projects" className="w-full mt-10 lg:mt-16 lg:min-h-[80vh] lg:flex lg:flex-col lg:justify-center">
      <h1 className={`header-3 gsap-animate-text ${isCollapsed ? 'md:text-center' : 'md:text-start'}`}>Things I&apos;ve Recently Built</h1>
      <div className="w-full grid gap-6 mt-2 grid-cols-1 md:grid-cols-3 md:grid-flow-row-dense items-start">
        {(() => {
          let largeCount = 0;
          return projects.filter((p) => p.highlight).map((project, index) => {
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
      <div className="gsap-animate-up">
        <SeeAllButton text="See All Projects" onClick={() => navigate('/projects')} />
      </div>
    </section>
  );
};

export default Projects;
