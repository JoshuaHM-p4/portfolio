import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
import galleryGroups from '../data/galleryGroups.json';
import GalleryGroupCard from '../components/GalleryGroupCard';
import Button from '../components/Button';
import { useNavbar } from '../context/NavbarContext';

const Community = () => {
  const { isCollapsed } = useNavbar();
  const navigate = useNavigate();
  const scrollerRef = useRef(null);

  const sortedGroups = [...galleryGroups].sort((a, b) => b.date.localeCompare(a.date));

  useGSAP(() => {
    const timer = setTimeout(() => {
      if (!scrollerRef.current) return;
      const elements = gsap.utils.toArray('.gsap-animate-up');
      elements.forEach((el) => {
        gsap.fromTo(el,
          { y: 40, opacity: 0, scale: 0.95, filter: 'blur(8px)' },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              scroller: scrollerRef.current,
              start: 'top 85%',
              toggleActions: 'play reverse play reverse'
            }
          }
        );
      });
      ScrollTrigger.refresh();
    }, 350);
    return () => clearTimeout(timer);
  }, { scope: scrollerRef });

  return (
    <div ref={scrollerRef} className={`h-full w-full overflow-y-auto scrollbar-thin scrollbar-webkit md:mt-0 mt-4 px-4 py-5 ${isCollapsed ? 'opacity-100' : 'md:opacity-100 opacity-10'}`}>
      <div className={`flex flex-col items-start justify-start ${isCollapsed ? 'lg:w-[80%] mx-auto' : 'w-full'}`}>
        <Button className="w-auto !mt-0 mb-4 gsap-animate-up" text={"← Back to Home"} onClick={() => navigate('/')} />
        <h1 className="header-2 mb-2 gsap-animate-text">Community</h1>

        <div className="w-full grid gap-3 mt-2 grid-cols-[repeat(auto-fill,minmax(220px,1fr))] auto-cols-[220px]">
          {sortedGroups.map((group) => (
            <div key={group.id} className="gsap-animate-up h-full">
              <Link to={`/community/${group.id}`} className="block h-full hover:scale-[1.01] transition-transform">
                <GalleryGroupCard group={group} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
