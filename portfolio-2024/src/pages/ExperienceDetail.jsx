import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import experiences from '../data/experience.json';
import Button from '../components/Button';
import Lightbox from '../components/Lightbox';
import { useNavbar } from '../context/NavbarContext';
import TechnologyCard from '../components/TechnologyCard';
import { getExperienceThumbnail } from '../utils/experienceThumbnail';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ExperienceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isCollapsed } = useNavbar();
  const experience = experiences.find((e) => String(e.id) === String(id));
  const [expanded, setExpanded] = useState(null);

  useGSAP(() => {
    gsap.fromTo('.gsap-mask-text',
      { y: '100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
    );
  }, [experience]);

  if (!experience) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center gap-2">
        <h1 className="header-2">Experience not found</h1>
        <Button className="w-auto" text={"← Back to Experience"} onClick={() => navigate('/experience')} />
      </div>
    );
  }

  return (
    <div className={`h-full w-full overflow-y-auto scrollbar-thin scrollbar-webkit md:mt-0 mt-4 px-4 py-5 ${isCollapsed ? 'opacity-100' : 'md:opacity-100 opacity-10'}`}>
      <div className={`flex flex-col items-start ${isCollapsed ? 'lg:w-[80%] mx-auto' : 'w-full'}`}>
        <Button className="w-auto !mt-0 mb-4" text={"← Experience & Education"} onClick={() => navigate('/experience')} />

        {(() => {
          const thumbnail = getExperienceThumbnail(experience);
          return thumbnail && (
            <div
              className="w-full h-72 mb-4 overflow-hidden rounded-lg cursor-pointer"
              onClick={() => setExpanded(thumbnail)}
            >
              <img src={thumbnail} alt={experience.company} className="w-full h-full object-cover hover:opacity-90 transition-opacity" />
            </div>
          );
        })()}

        <p className="date">{experience.date}</p>
        <h1 className="header-2 text-start mt-1">{experience.title}</h1>
        <div className="flex items-center gap-2 mb-4">
          {experience.logo && (
            <img src={experience.logo} alt={`${experience.company} logo`} className="w-6 h-6 object-contain rounded-sm" />
          )}
          <h2 className="header-3 text-start">{experience.company}</h2>
        </div>

        <div className="flex flex-col gap-3 mt-2">
          {experience.longDescription?.map((desc, i) => (
            <div key={i} className="overflow-hidden">
              <p className="paragraph text-justify gsap-mask-text">{desc}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap mt-6">
          {experience.technologies?.map((t, i) => (
            <TechnologyCard key={i} technology={t} />
          ))}
        </div>

        {experience.photos?.length > 0 && (
          <div className="w-full columns-2 md:columns-3 lg:columns-4 gap-3 mt-6">
            {experience.photos.map((photo, i) => (
              <img
                key={photo.src}
                src={photo.src}
                alt={`${experience.company} ${i + 1}`}
                loading="lazy"
                onClick={() => setExpanded(photo.src)}
                className="w-full mb-3 rounded-lg border border-white-100 shadow-md break-inside-avoid cursor-pointer hover:opacity-90 transition-opacity"
              />
            ))}
          </div>
        )}
      </div>

      {expanded && (
        <Lightbox src={expanded} alt={experience.company} onClose={() => setExpanded(null)} />
      )}
    </div>
  );
};

export default ExperienceDetail;
