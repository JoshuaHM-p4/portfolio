import { useNavigate } from 'react-router-dom';
import GalleryCard from '../components/GalleryCard';
import SeeAllButton from '../components/SeeAllButton';
import { useNavbar } from '../context/NavbarContext';
import gallery from '../data/gallery.json';

const Community = () => {
  const { isCollapsed } = useNavbar();
  const navigate = useNavigate();

  return (
    <section id="community" className="w-full mt-10 lg:mt-16 lg:min-h-[80vh] lg:flex lg:flex-col lg:justify-center">
      <h1 className={`header-3 gsap-animate-text ${isCollapsed ? 'md:text-center' : 'md:text-start'}`}>Community</h1>
      <div className="w-full grid gap-3 mt-2 grid-cols-[repeat(auto-fill,minmax(220px,1fr))] auto-cols-[220px]">
        {gallery.slice(0, 4).map((item) => (
          <div key={item.id} className="gsap-animate-up h-full">
            <GalleryCard image={item.img} caption={item.caption} />
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
