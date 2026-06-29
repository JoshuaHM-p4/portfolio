import GSAPHoverCard from './GSAPHoverCard';
import TechnologyCard from './TechnologyCard';

const EducationCard = ({ education }) => {
  return (
    <GSAPHoverCard className="w-full flex flex-col gap-2 p-2">
      <h1 className="header-5 text-start">{education?.title}</h1>
      <h2 className="header-6 italic text-start font-normal">{education?.institution}</h2>
      <p className="description">{education?.description}</p>
      <div className='w-full flex gap-2 flex-wrap'>
        {education?.technologies.map((tech, index) => (
          <TechnologyCard key={index} technology={tech} />
        ))}
      </div>
    </GSAPHoverCard>
  );
};

export default EducationCard;
