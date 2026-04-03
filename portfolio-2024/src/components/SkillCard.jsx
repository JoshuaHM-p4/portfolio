const SkillCard = ({ skill }) => {
  return (
    <div className="p-2 flex flex-col justify-center items-center align-bottom rounded-md bg-white-500/25 border border-white-100 shadow-md
    hover:bg-white-500/60 hover:shadow-lg transition-all ease-in-out">
      <img src={`./icons/${skill?.icon}.svg`} alt={skill?.name} className="w-12" />
      <p className="skill-text">{skill?.name}</p>
    </div>
  )
}

export default SkillCard;
