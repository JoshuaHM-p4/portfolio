import TechnologyCard from './TechnologyCard';
import GSAPHoverCard from './GSAPHoverCard';

const ProjectCard = ({ project }) => {
  return (
    <GSAPHoverCard className="w-full h-full flex flex-col pb-2 overflow-hidden group">
      {project?.img && (
        <div className="relative h-52 shrink-0 bg-white-500/30 rounded-t-md overflow-hidden">
          <img src={project.img} alt={project?.name} className="w-full h-full object-center object-cover rounded-t-md" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#A05645] via-[#FFA752] to-[#F9F5F1] opacity-35 group-hover:opacity-0 transition-opacity duration-300 ease-in-out" />
        </div>
      )}
      <div className="flex flex-col gap-1 p-4 flex-1">
        <p className="date">{project?.date}</p>
        <h1 className="header-4 text-start">{project?.name}</h1>
        <p className="description line-clamp-2">{project?.description}</p>
        <div className="flex gap-2 flex-wrap">
          {project?.technologies?.slice(0, 4).map((technology, index) => (
            <TechnologyCard key={index} technology={technology} />
          ))}
        </div>
      </div>
    </GSAPHoverCard>
  );
};


export default ProjectCard;
