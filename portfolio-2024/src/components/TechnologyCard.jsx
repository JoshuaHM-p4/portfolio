const TechnologyCard = ({technology, className = ""}) => {
  return (
    <p className={`font-texturina text-[0.625rem] font-medium text-center text-blue-500 bg-blue-100/20 border border-white-100 rounded px-2 py-1 ${className}`}>{technology}</p>
  )
}

export default TechnologyCard;