const PictureCard = ({ image, title, description }) => {
  return (
    <div className="w-full h-full md:max-h-64 max-h-56 bg-white-500 bg-opacity-25 rounded-xl border border-white-100 shadow-md
     hover:bg-white-500  hover:bg-opacity-60 hover:shadow-lg transition-all overflow-hidden ease-in-out">
      <img src={image} alt={title} className="w-full h-full object-cover rounded-xl scale-110 translate-y-6 md:scale-100 md:translate-y-0 md:object-center" />
    </div>
  );
}
export default PictureCard;