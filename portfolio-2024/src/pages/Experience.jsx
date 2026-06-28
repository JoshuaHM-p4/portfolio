import { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
import Button from '../components/Button';
import ExperienceCard from '../components/ExperienceCard';
import EducationCard from '../components/EducationCard';
import SummarySlider from '../components/SummarySlider';
import { useNavbar } from '../context/NavbarContext';

import linkData from '../data/links.json';
import experienceSummary from '../data/experienceSummary.json';
import experienceList from '../data/experience.json';
import educationList from '../data/education.json';

const Experience = () => {
  const { isCollapsed } = useNavbar();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('experience');
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useGSAP(() => {
    const elements = gsap.utils.toArray('.gsap-animate-up');
    elements.forEach((el) => {
      gsap.from(el, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          scroller: scrollerRef.current,
          start: 'top 95%',
          toggleActions: 'play none none none'
        }
      });
    });
  }, { scope: containerRef, dependencies: [activeTab] });

  const list = activeTab === 'experience' ? experienceList : educationList;

  return (
    <div ref={scrollerRef} className={`h-full w-full overflow-y-auto scrollbar-thin scrollbar-webkit md:mt-0 mt-4 px-4 py-5 ${isCollapsed ? 'opacity-100' : 'md:opacity-100 opacity-10'}`}>
      <div ref={containerRef} className={`flex flex-col items-start justify-start ${isCollapsed ? 'lg:w-[80%] mx-auto' : 'w-full'}`}>
        <Button className="w-auto !mt-0 mb-4 gsap-animate-up" text={"← Back to Home"} onClick={() => navigate('/')} />
        <h1 className="header-2 mb-2 gsap-animate-up">Experience & Education</h1>

        <section className="flex flex-col md:flex-row gap-2 w-full mt-4">
          <div className="h-auto flex-1 gsap-animate-up">
            <div className="flex flex-col gap-1 w-full md:sticky md:top-0 z-10">
              <h1 className="header-3 text-center md:text-start">My Background Expertise</h1>
              <div className="inline-flex shadow-xs w-full sticky top-0 md md:relative" role="group">
                <Button
                  className="!rounded-none !rounded-l-full md:!rounded-l-2xl border-r-0 flex-1"
                  active={activeTab === 'experience'}
                  text={'Experience'}
                  onClick={() => setActiveTab('experience')}
                />
                <Button
                  className="!rounded-none !rounded-r-full md:!rounded-r-2xl flex-1"
                  active={activeTab === 'education'}
                  text={'Education'}
                  onClick={() => setActiveTab('education')}
                />
              </div>
              <div className="paragraph my-1">
                What I bring to the table:
                <SummarySlider summaries={experienceSummary} />
                <Button className="w-auto" text={'Open CV'} onClick={() => window.open(linkData.resume, '_blank')} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full flex-1 md:px-10 mt-6 md:mt-0">
            <div className="relative border-l-2 border-white-100/20 ml-2 pl-6 space-y-8">
              {list.map((item, index) => (
                <div key={index} className="relative gsap-animate-up">
                  {/* Timeline Node */}
                  <div className="absolute -left-[33px] top-4 w-4 h-4 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                  {/* Date above the card */}
                  <p className="date">{item.date}</p>
                  
                  <Link to={activeTab === 'experience' ? `/experience/${item.id}` : `/education/${item.id}`} className="block h-full">
                    {activeTab === 'experience' ? (
                      <ExperienceCard experience={item} />
                    ) : (
                      <EducationCard education={item} />
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
