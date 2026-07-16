const GalleryCard = ({ image, caption }) => {
  return (
    <div
      className={`
        relative w-full h-full md:max-h-64 max-h-56
        overflow-hidden rounded-xl border border-white/20 shadow-md
        hover:shadow-lg transition-all ease-in-out
      `}
    >
      <img
        src={image}
        alt={caption}
        className="w-full h-full object-cover opacity-90 image-smooth"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

      <div className="absolute bottom-0 z-20 text-white p-4 w-full">
        <p className="header-6 text-start text-white-400">{caption}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
