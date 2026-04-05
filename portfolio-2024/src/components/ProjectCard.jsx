const ProjectCard = ({ project }) => {
  return (
    <div 
      className="w-full bg-white-500/10 border border-white-100 shadow-md hover:bg-white-500/40 pb-2 hover:shadow-lg backdrop-blur-md rounded-lg transition-all ease-in-out"
    >
      <div className="h-52 bg-white-500/30 rounded-t-md flex items-center justify-center">
        <img src={project?.img} alt={project?.name} className="h-full object-center object-cover rounded-t-md transition-all ease-in-out opacity-80 hover:opacity-100" />
      </div>
      <div className="flex flex-col gap-1 p-2">
        <p className="date">{project?.date}</p>
        <h1 className="header-4 text-start">{project?.name}</h1>
        <p className="description line-clamp-2">{project?.description}</p>
        <div className="flex gap-2 flex-wrap">
          {project?.technologies?.map((technology, index) => (
            <TechnologyCard key={index} technology={technology} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TechnologyCard = ({technology, className}) => {
  return (
    <p className={`font-texturina text-[0.625rem] font-medium pb-2 text-center text-black-400 bg-blue-200/20 border border-white-100 rounded px-2 py-1 ${className}`}>{technology}</p>
  )
}

export default ProjectCard;
