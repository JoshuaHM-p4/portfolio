const TechnologyCard = ({technology, className}) => {
  return (
    <p className={`font-texturina text-[0.625rem] font-medium pb-2 text-center text-black-400 bg-blue-200 bg-opacity-25 border border-white-100 rounded px-2 py-1 ${className}`}>{technology}</p>
  )
}

export default TechnologyCard;