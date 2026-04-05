import TechnologyCard from './TechnologyCard';

const ExperienceCard = ({ experience }) => {
  return (
    <div
      className="w-full bg-white-500/10 border border-white-100 shadow-md flex flex-col gap-2 hover:bg-white-500/40 p-2 hover:shadow-lg backdrop-blur-md rounded-lg transition-all ease-in-out"
    >
      <p className="date">{experience?.date}</p>
      <h1 className="header-5 text-start">{experience.title}</h1>
      <h2 className="header-6 italic text-start font-normal">{experience.company}</h2>
      <ul className="list-none flex flex-col gap-1">
        {experience.description.map((desc, index) => (
          <li key={index} className="description">{desc}</li>
        ))}
      </ul>
      <div className='w-full flex gap-2 flex-wrap'>
        {experience.technologies.map((technology, index) => (
          <TechnologyCard key={index} technology={technology} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
