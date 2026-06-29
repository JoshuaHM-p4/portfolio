import { useNavigate, useParams } from 'react-router-dom';
import projects from '../data/projects.json';
import Button from '../components/Button';
import { useNavbar } from '../context/NavbarContext';
import { slugify } from '../utils/slug';
import GithubIcon from '../svg/github.svg?react';
import HyperlinkIcon from '../svg/hyperlink.svg?react';
import HuggingFaceIcon from '../svg/huggingface.svg?react';
import TechnologyCard from '../components/TechnologyCard';

const IconLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-3 py-2 mt-2 border border-white-100 bg-white-500/10 hover:bg-white-500/40 backdrop-blur-sm md:rounded-2xl rounded-full transition-all ease-in-out"
  >
    <Icon className="w-5 h-5 text-purple-500 fill-current stroke-current" />
    <span className="font-texturina text-sm font-medium text-purple-500">{label}</span>
  </a>
);

const pickIconFor = (url = '') => {
  if (/github\.com/i.test(url)) return { icon: GithubIcon, label: 'View in GitHub' };
  if (/huggingface\.co/i.test(url)) return { icon: HuggingFaceIcon, label: 'View in HuggingFace' };
  return { icon: HyperlinkIcon, label: 'View Code / Repo' };
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isCollapsed } = useNavbar();
  const project = projects.find((p) => slugify(p.name) === slug);

  if (!project) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center gap-2">
        <h1 className="header-2">Project not found</h1>
        <Button className="w-auto" text={"← Back to All Projects"} onClick={() => navigate('/projects')} />
      </div>
    );
  }

  return (
    <div className={`h-full w-full overflow-y-auto scrollbar-thin scrollbar-webkit md:mt-0 mt-4 px-4 py-5 ${isCollapsed ? 'opacity-100' : 'md:opacity-100 opacity-10'}`}>
      <div className={`flex flex-col items-start ${isCollapsed ? 'lg:w-[80%] mx-auto' : 'w-full'}`}>
        <Button className="w-auto !mt-0 mb-4" text={"← All Projects"} onClick={() => navigate('/projects')} />

        {project.img && (
          <div className="w-full h-72 mb-4 overflow-hidden rounded-lg">
            <img src={project.img} alt={project.name} className="w-full h-full object-cover" />
          </div>
        )}

        <p className="date">{project.date}</p>
        <h1 className="header-2 text-start mt-1">{project.name}</h1>
        <p className="paragraph mt-3">{project.description}</p>

        <div className="flex gap-2 flex-wrap mt-4">
          {project.technologies?.map((t, i) => (
            <TechnologyCard key={i} technology={t} />
          ))}
        </div>

        <div className="flex gap-3 flex-wrap">
          {project.codeLink && (() => {
            const { icon, label } = pickIconFor(project.codeLink);
            return <IconLink href={project.codeLink} icon={icon} label={label} />;
          })()}
          {project.demoLink && project.demoLink !== project.codeLink && (
            <IconLink href={project.demoLink} icon={HyperlinkIcon} label="Live Demo" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
