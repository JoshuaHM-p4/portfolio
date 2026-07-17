const SkillCard = ({ skill }) => {
  return (
    <div className="h-28 p-2 flex flex-col justify-center items-center gap-1">
      <img src={`/icons/${skill?.icon}.svg`} alt={skill?.name} className="h-10 w-10 object-contain shrink-0" />
      <p className="skill-text text-center leading-tight line-clamp-2">{skill?.name}</p>
    </div>
  );
};

export default SkillCard;
