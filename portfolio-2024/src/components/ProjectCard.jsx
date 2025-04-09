const ProjectCard = ({ project }) => {
  return (
    <div className="w-full
    bg-white-opacity-25 rounded-md border border-white-100 shadow-md
    hover:bg-white-500  hover:bg-opacity-60 pb-2 hover:shadow-lg transition-all ease-in-out">
      <div className="h-52 bg-white-500 bg-opacity-50 rounded-t-md flex items-center justify-center">
        <img src={project?.img} alt={project?.name} className="h-full object-center object-cover rounded-t-md transition-all ease-in-out opacity-70 hover:opacity-100" />
      </div>
      <div className="p-2">
        <h1 className="header-3">{project?.name}</h1>
        <p className="paragraph">{project?.description}</p>
      </div>
      <div className='w-full flex justify-evenly p-2'>
        {project?.demoLink && (<a href={project?.demoLink} className='nav-profile-link' target="_blank" rel="noopener noreferrer"> view demo </a>)}
        {project?.codeLink && (<a href={project?.codeLink} className='nav-profile-link' target="_blank" rel="noopener noreferrer"> view code </a>)}
      </div>
    </div>
  )
};

export default ProjectCard;