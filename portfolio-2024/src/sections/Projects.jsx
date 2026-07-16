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
      <div className="w-full grid gap-3 mt-2 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] auto-cols-[300px]">
        {projects.filter((p) => p.highlight).map((project, index) =>
          <div key={index} className="gsap-animate-up h-full">
            <Link to={`/projects/${slugify(project.name)}`} className="block h-full hover:scale-[1.01] transition-transform">
              <ProjectCard project={project} />
            </Link>
          </div>
        )}
      </div>
      <div className="gsap-animate-up">
        <SeeAllButton text="See All Projects" onClick={() => navigate('/projects')} />
      </div>
    </section>
  );
};

export default Projects;
