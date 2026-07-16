import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
import { useLocation } from 'react-router-dom';
import { useSectionObserver } from '../context/SectionObserverContext';
import { useNavbar } from '../context/NavbarContext';
import SectionDots from '../components/SectionDots';

import About from '../sections/About';
import Projects from '../sections/Projects';
import Notebooks from '../sections/Notebooks';
import Experience from '../sections/Experience';
import Courses from '../sections/Courses';
import Community from '../sections/Community';

const SECTION_IDS = ['about', 'projects', 'notebooks', 'experiences', 'courses', 'community'];

const Home = () => {
  const { isCollapsed } = useNavbar();
  const { setActiveSection } = useSectionObserver();
  const location = useLocation();
  const scrollerRef = useRef(null);
  const observerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
    }, 350); // wait for page-transition to finish

    return () => clearTimeout(timer);
  }, { scope: scrollerRef });

  const goToSection = useCallback((index) => {
    const id = SECTION_IDS[index];
    const el = id && scrollerRef.current?.querySelector(`#${id}`);
    if (!el || !scrollerRef.current) return;
    const containerRect = scrollerRef.current.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    scrollerRef.current.scrollTo({
      top: scrollerRef.current.scrollTop + (elRect.top - containerRect.top),
      behavior: 'smooth'
    });
  }, []);

  // Section visibility tracking — single IntersectionObserver scoped to the scroll container
  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;
    const timer = setTimeout(() => {
      const sectionEls = SECTION_IDS.map((id) => root.querySelector(`#${id}`)).filter(Boolean);
      // Sections can be taller than the viewport (e.g. Projects' multi-row grid), so a
      // ratio-of-own-height threshold never fires for them. Instead, track whichever
      // section currently occupies a fixed band near the top of the scroller.
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const idx = sectionEls.indexOf(entry.target);
              if (idx !== -1) {
                setActiveIndex(idx);
                setActiveSection(SECTION_IDS[idx]);
              }
            }
          });
        },
        { root, rootMargin: '0px 0px -60% 0px', threshold: 0 }
      );
      sectionEls.forEach((el) => observer.observe(el));
      observerRef.current = observer;
    }, 400);

    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, [setActiveSection]);

  // Cross-page arrival scroll (e.g. clicking a sidebar nav item while off-home)
  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;
    const t = setTimeout(() => {
      if (target === 'home') {
        scrollerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        goToSection(SECTION_IDS.indexOf(target));
      }
    }, 350);
    return () => clearTimeout(t);
  }, [location.state, goToSection]);

  return (
    <div className="relative h-full w-full">
      <div ref={scrollerRef} className={`h-full w-full overflow-y-auto scrollbar-thin scrollbar-webkit md:mt-0 mt-4 px-4 py-5 ${isCollapsed ? 'opacity-100' : 'md:opacity-100 opacity-10'}`}>
        <div
          className={`flex flex-col items-start justify-start transition-all duration-300 overflow-x-hidden lg:overflow-visible
          ${isCollapsed ? "lg:w-[80%]  mx-auto" : "w-full"}`}
        >
          <About />
          <Projects />
          <Notebooks />
          <Experience />
          <Courses />
          <Community />
        </div>
      </div>
      <SectionDots activeIndex={activeIndex} total={SECTION_IDS.length} onSelect={goToSection} />
    </div>
  );
}

export default Home;
