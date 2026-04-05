const SkillCard = ({ skill }) => {
  return (
    <div 
      className="p-2 flex flex-col justify-center items-center align-bottom border border-white-100 shadow-md bg-white-500/10 backdrop-blur-md rounded-lg hover:bg-white-500/40 hover:shadow-lg transition-all ease-in-out"
    >
      <img src={`./icons/${skill?.icon}.svg`} alt={skill?.name} className="w-12" />
      <p className="skill-text">{skill?.name}</p>
    </div>
  );
};

export default SkillCard;
