import { Link, useNavigate } from 'react-router-dom';
import GalleryGroupCard from '../components/GalleryGroupCard';
import SeeAllButton from '../components/SeeAllButton';
import { useNavbar } from '../context/NavbarContext';
import galleryGroups from '../data/galleryGroups.json';

const Community = () => {
  const { isCollapsed } = useNavbar();
  const navigate = useNavigate();

  const organizations = galleryGroups
    .filter((g) => g.category === 'Organization')
    .sort((a, b) => b.date.localeCompare(a.date));
  const events = galleryGroups
    .filter((g) => g.category === 'Event')
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section id="community" className="w-full mt-10 lg:mt-16 lg:min-h-[80vh] lg:flex lg:flex-col lg:justify-center">
      <h1 className={`header-3 gsap-animate-text ${isCollapsed ? 'md:text-center' : 'md:text-start'}`}>Community</h1>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
        {organizations.map((group) => (
          <div key={group.id} className="gsap-animate-up h-full col-span-2">
            <Link to={`/community/${group.id}`} className="block h-full hover:scale-[1.01] transition-transform">
              <GalleryGroupCard group={group} />
            </Link>
          </div>
        ))}
        {events.map((group) => (
          <div key={group.id} className="gsap-animate-up h-full col-span-1">
            <Link to={`/community/${group.id}`} className="block h-full hover:scale-[1.01] transition-transform">
              <GalleryGroupCard group={group} />
            </Link>
          </div>
        ))}
      </div>
      <div className="gsap-animate-up">
        <SeeAllButton text="See All Community Photos" onClick={() => navigate('/community')} />
      </div>
    </section>
  );
};

export default Community;
