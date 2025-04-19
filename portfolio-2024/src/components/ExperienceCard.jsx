import TechnologyCard from './TechnologyCard';

const ExperienceCard = ({experience}) => {
  return (
    <div className="w-full
    bg-white-opacity-25 rounded-md border border-white-100 shadow-md
    flex flex-col gap-2
    hover:bg-white-500  hover:bg-opacity-60 p-2 hover:shadow-lg transition-all ease-in-out">
      <p className="date">{experience?.date}</p>
      <h1 className="header-5 text-start">{experience.title}</h1>
      <h2 className="header-6 italic text-start font-normal">{experience.company}</h2>
      <p className="paragraph">
        <ul>
          {experience?.description?.map((point, index) => (
            <li key={index} className="list-disc my-2 text-sm list-inside text-start">{point}</li>
          ))}
        </ul>
      </p>
      <div className='w-full flex gap-2 flex-wrap'>
        {experience?.technologies?.map((tech, index) => (
          <TechnologyCard key={index} technology={tech} />
        ))}
      </div>
    </div>
  )
}
export default ExperienceCard;