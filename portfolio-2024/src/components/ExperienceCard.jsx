import TechnologyCard from './TechnologyCard';
import GSAPHoverCard from './GSAPHoverCard';

const ExperienceCard = ({ experience }) => {
  return (
    <GSAPHoverCard className="w-full flex flex-col gap-2 p-2">
      <h1 className="header-5 text-start">{experience.title}</h1>
      <h2 className="header-6 italic text-start font-normal">{experience.company}</h2>
      <p className="description">{experience.description}</p>
      <div className='w-full flex gap-2 flex-wrap'>
        {experience.technologies.map((technology, index) => (
          <TechnologyCard key={index} technology={technology} />
        ))}
      </div>
    </GSAPHoverCard>
  );
};

export default ExperienceCard;
