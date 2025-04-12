import GithubIcon from '../svg/github.svg?react';
import LinkedInIcon from '../svg/linkedin.svg?react';
import linkData from "../data/links.json";

const PictureCard = ({ image, title, description }) => {
  return (
    <div
      className={`
        relative md:relative
        w-full h-full md:max-h-64 md:min-w-40 max-h-56
        overflow-hidden rounded-xl border border-white/20 shadow-md
        hover:shadow-lg transition-all ease-in-out
      `}
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className={`
          w-full h-full object-cover roundedPh-xl
          scale-110 object-[50%_25%]
          md:scale-100 md:translate-y-0 md:object-center
          opacity-90
        `}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />

      {/* Optional content */}
      <div className="md:hidden absolute bottom-0 z-20 text-white p-4 w-full">
        <div className="flex w-full">
          <div className='flex-1 justify-start'>
            <h2 className="header-2 text-start text-white-400">{title}</h2>
            <p className="description text-white-400">{description}</p>
          </div>
          <div className="flex gap-1">
            <a href={linkData.linkedin} target="_blank" rel="noopener noreferrer" className="nav-profile-link opacity-70 hover:opacity-100">
              <LinkedInIcon className="linkIcon-dark" />
            </a>
            <a href={linkData.github} target="_blank" rel="noopener noreferrer" className="nav-profile-link opacity-70 hover:opacity-100">
              <GithubIcon className="linkIcon-dark" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PictureCard;