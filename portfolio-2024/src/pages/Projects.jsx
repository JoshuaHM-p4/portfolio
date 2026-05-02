import { Link, useNavigate } from 'react-router-dom';
import projects from '../data/projects.json';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { useNavbar } from '../context/NavbarContext';
import { slugify } from '../utils/slug';

const Projects = () => {
  const { isCollapsed } = useNavbar();
  const navigate = useNavigate();
  return (
    <div className={`h-full w-full overflow-y-auto scrollbar-thin scrollbar-webkit md:mt-0 mt-4 px-4 py-5 ${isCollapsed ? 'opacity-100' : 'md:opacity-100 opacity-10'}`}>
      <div className={`flex flex-col items-start justify-start ${isCollapsed ? 'lg:w-[80%] mx-auto' : 'w-full'}`}>
        <Button className="rounded-md w-auto !mt-0 mb-4" text={"← Back to Home"} onClick={() => navigate('/')} />
        <h1 className="header-2 mb-2">All Projects</h1>
        <div className="w-full grid gap-5 mt-2 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {projects.map((project, index) => (
            <Link key={index} to={`/projects/${slugify(project.name)}`} className="block h-full hover:scale-[1.01] transition-transform">
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
