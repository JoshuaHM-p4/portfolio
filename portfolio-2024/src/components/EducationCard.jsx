const EducationCard = ({education}) => {
  return (
    <div className="w-full
    bg-white-opacity-25 rounded-md border border-white-100 shadow-md
    flex flex-col gap-2
    hover:bg-white-500  hover:bg-opacity-60 p-2 hover:shadow-lg transition-all ease-in-out">
      <p className="date">{education?.date}</p>
      <h1 className="header-5 text-start">{education?.title}</h1>
      <h2 className="header-6 italic text-start font-normal">{education?.institution}</h2>
      <p className="description">{education?.description}</p>
      <div className='w-full flex gap-2 flex-wrap'>
        {education?.technologies.map((tech, index) => (
          <p key={index} className="font-texturina text-[0.625rem] font-medium pb-2 text-center text-black-400 bg-blue-200 bg-opacity-25 border border-white-100 rounded px-2 py-1">{tech}</p>
        ))}
      </div>
    </div>
  )
}
export default EducationCard;