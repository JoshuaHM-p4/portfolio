import TechnologyCard from './TechnologyCard';
import GSAPHoverCard from './GSAPHoverCard';
import { getExperienceThumbnail } from '../utils/experienceThumbnail';

const ExperienceCard = ({ experience }) => {
  const thumbnail = getExperienceThumbnail(experience);

  return (
    <GSAPHoverCard className="w-full flex flex-col gap-2 p-2">
      {thumbnail && (
        <div className="w-full h-32 mb-1 overflow-hidden rounded-lg">
          <img src={thumbnail} alt={experience.company} className="w-full h-full object-cover" />
        </div>
      )}
      <h1 className="header-5 text-start">{experience.title}</h1>
      <div className="flex items-center gap-1.5">
        {experience.logo && (
          <img src={experience.logo} alt={`${experience.company} logo`} className="w-4 h-4 object-contain rounded-sm" />
        )}
        <h2 className="header-6 italic text-start font-normal">{experience.company}</h2>
      </div>
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
