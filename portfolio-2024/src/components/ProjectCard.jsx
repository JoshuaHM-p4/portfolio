import TechnologyCard from "./TechnologyCard";

const ProjectCard = ({ project }) => {
  return (
    <div className="w-full
    bg-white-opacity-25 rounded-md border border-white-100 shadow-md
    hover:bg-white-500  hover:bg-opacity-60 pb-2 hover:shadow-lg transition-all ease-in-out">
      <div className="h-52 bg-white-500 bg-opacity-50 rounded-t-md flex items-center justify-center">
        <img src={project?.img} alt={project?.name} className="h-full object-center object-cover rounded-t-md transition-all ease-in-out opacity-80 hover:opacity-100" />
      </div>
      <div className="flex flex-col gap-1 p-2">
        <p className="date">{project?.date}</p>
        <h1 className="header-4 text-start">{project?.name}</h1>
        <div className='w-full flex gap-2 flex-wrap'>
          {project?.technologies.map((tech, index) => (
            <TechnologyCard key={index} technology={tech} className="w-auto" />
          ))}
        </div>
        <p className="font-texturina text-black-400 text-sm">See Details</p>

        {/*         <div className='w-full flex justify-evenly p-2'>
          {project?.demoLink && (<a href={project?.demoLink} className='nav-profile-link' target="_blank" rel="noopener noreferrer"> view demo </a>)}
          {project?.codeLink && (<a href={project?.codeLink} className='nav-profile-link' target="_blank" rel="noopener noreferrer"> view code </a>)}
        </div> */}
      </div>
    </div>
  )
};

export default ProjectCard;