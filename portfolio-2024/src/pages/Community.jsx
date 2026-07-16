import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
import gallery from '../data/gallery.json';
import GalleryCard from '../components/GalleryCard';
import Button from '../components/Button';
import { useNavbar } from '../context/NavbarContext';

const GallerySection = ({ title, items }) => (
  <div className="w-full mt-6 first:mt-0">
    <h2 className="header-4 mb-3 gsap-animate-text">{title}</h2>
    <div className="w-full grid gap-3 grid-cols-[repeat(auto-fill,minmax(220px,1fr))] auto-cols-[220px]">
      {items.map((item) => (
        <div key={item.id} className="gsap-animate-up h-full">
          <GalleryCard image={item.img} caption={item.caption} />
        </div>
      ))}
    </div>
  </div>
);

const Community = () => {
  const { isCollapsed } = useNavbar();
  const navigate = useNavigate();
  const scrollerRef = useRef(null);

  const organizations = gallery.filter((item) => item.category === 'Organizations');
  const events = gallery.filter((item) => item.category === 'Events');

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
      const textElements = gsap.utils.toArray('.gsap-animate-text');
      textElements.forEach((el) => {
        gsap.fromTo(el,
          { y: -15, opacity: 0, filter: 'blur(10px)' },
          {
            y: 0,
            opacity: 1,
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

        {organizations.length > 0 && (
          <GallerySection title="Organizations & Workshops" items={organizations} />
        )}
        {events.length > 0 && (
          <GallerySection title="Events & Competitions" items={events} />
        )}
      </div>
    </div>
  );
};

export default Community;
