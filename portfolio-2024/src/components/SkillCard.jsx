const SkillCard = ({ skill }) => {
  return (
    <div
      className="h-24 p-2 flex flex-col justify-center items-center gap-1 border border-white-100 shadow-md bg-white-500/10 backdrop-blur-md rounded-lg hover:bg-white-500/40 hover:shadow-lg transition-all ease-in-out"
    >
      <img src={`./icons/${skill?.icon}.svg`} alt={skill?.name} className="h-10 w-10 object-contain shrink-0" />
      <p className="skill-text text-center leading-tight line-clamp-2">{skill?.name}</p>
    </div>
  );
};

export default SkillCard;
