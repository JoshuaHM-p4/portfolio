import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import galleryGroups from '../data/galleryGroups.json';
import Button from '../components/Button';
import Lightbox from '../components/Lightbox';
import { useNavbar } from '../context/NavbarContext';

const CommunityDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isCollapsed } = useNavbar();
  const group = galleryGroups.find((g) => g.id === id);
  const [expanded, setExpanded] = useState(null);

  if (!group) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center gap-2">
        <h1 className="header-2">Not found</h1>
        <Button className="w-auto" text={"← Back to Community"} onClick={() => navigate('/community')} />
      </div>
    );
  }

  return (
    <div className={`h-full w-full overflow-y-auto scrollbar-thin scrollbar-webkit md:mt-0 mt-4 px-4 py-5 ${isCollapsed ? 'opacity-100' : 'md:opacity-100 opacity-10'}`}>
      <div className={`flex flex-col items-start ${isCollapsed ? 'lg:w-[80%] mx-auto' : 'w-full'}`}>
        <Button className="w-auto !mt-0 mb-4" text={"← All Community"} onClick={() => navigate('/community')} />

        <h1 className="header-2 text-start mt-1">{group.name}</h1>
        <p className="description mt-1">{group.photos.length} photo{group.photos.length !== 1 ? 's' : ''}</p>

        <div className="w-full columns-2 md:columns-3 lg:columns-4 gap-3 mt-4">
          {group.photos.map((photo, i) => (
            <img
              key={photo}
              src={photo}
              alt={`${group.name} ${i + 1}`}
              loading="lazy"
              onClick={() => setExpanded(photo)}
              className="w-full mb-3 rounded-lg border border-white-100 shadow-md break-inside-avoid cursor-pointer hover:opacity-90 transition-opacity"
            />
          ))}
        </div>
      </div>

      {expanded && (
        <Lightbox src={expanded} alt={group.name} onClose={() => setExpanded(null)} />
      )}
    </div>
  );
};

export default CommunityDetail;
