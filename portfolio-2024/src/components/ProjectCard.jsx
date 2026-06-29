import TechnologyCard from './TechnologyCard';
import GSAPHoverCard from './GSAPHoverCard';

const ProjectCard = ({ project }) => {
  return (
    <GSAPHoverCard className="w-full h-full flex flex-col pb-2 overflow-hidden">
      <div className="h-52 shrink-0 bg-white-500/30 rounded-t-md flex items-center justify-center overflow-hidden">
        <img src={project?.img} alt={project?.name} className="w-full h-full object-center object-cover rounded-t-md transition-all ease-in-out opacity-80 hover:opacity-100" />
      </div>
      <div className="flex flex-col gap-1 p-2 flex-1">
        <p className="date">{project?.date}</p>
        <h1 className="header-4 text-start">{project?.name}</h1>
        <p className="description line-clamp-2">{project?.description}</p>
        <div className="flex gap-2 flex-wrap">
          {project?.technologies?.map((technology, index) => (
            <TechnologyCard key={index} technology={technology} />
          ))}
        </div>
      </div>
    </GSAPHoverCard>
  );
};


export default ProjectCard;
