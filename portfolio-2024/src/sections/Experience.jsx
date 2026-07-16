import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ExperienceCard from '../components/ExperienceCard';
import EducationCard from '../components/EducationCard';
import SummarySlider from '../components/SummarySlider';
import experienceSummary from '../data/experienceSummary.json';
import experienceList from '../data/experience.json';
import educationList from '../data/education.json';
import linkData from '../data/links.json';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experiences" className="flex flex-col md:flex-row gap-4 w-full mt-10 lg:mt-16 lg:min-h-[80vh]">
      {/* Experience Summary */}
      <div className="h-auto flex-1 gsap-animate-up">
        <div className="flex flex-col gap-1 w-full md:sticky md:top-0 z-10">
          <h1 className="header-3 text-start">My Background Expertise</h1>
          <div className="flex md:rounded-2xl rounded-full shadow-sm w-full bg-white-500/10 border border-white-100 mt-2 p-1 relative z-10" role="group">
            <Button
              className="!mt-0 !border-none !shadow-none !bg-transparent hover:!bg-white-500/20 md:rounded-xl rounded-full flex-1"
              active={activeTab === 'experience'}
              text={'Experience'}
              onClick={() => { setActiveTab('experience') }}
            />
            <Button
              className="!mt-0 !border-none !shadow-none !bg-transparent hover:!bg-white-500/20 md:rounded-xl rounded-full flex-1"
              active={activeTab === 'education'}
              text={'Education'}
              onClick={() => { setActiveTab('education') }}
            />
          </div>
          <div className="paragraph my-1">
            What I bring to the table:
            <SummarySlider summaries={experienceSummary} />
            <Button className="w-auto" text={'Open CV'} onClick={() => { window.open(linkData.resume, '_blank') }} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full flex-1 md:px-10 mt-6 md:mt-0">
        <div className="relative border-l-2 border-white-100/20 ml-2 pl-6 space-y-8">
          {(activeTab === 'experience' ? experienceList : educationList).map((item, index) => (
            <div key={index} className="relative gsap-animate-up">
              <div className="absolute -left-[33px] top-4 w-4 h-4 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
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
  );
};

export default Experience;
