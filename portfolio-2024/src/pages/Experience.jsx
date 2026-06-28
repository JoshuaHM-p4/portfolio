import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import ExperienceCard from '../components/ExperienceCard';
import EducationCard from '../components/EducationCard';
import { useNavbar } from '../context/NavbarContext';

import linkData from '../data/links.json';
import experienceSummary from '../data/experienceSummary.json';
import experienceList from '../data/experience.json';
import educationList from '../data/education.json';

const Experience = () => {
  const { isCollapsed } = useNavbar();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <div className={`h-full w-full overflow-y-auto scrollbar-thin scrollbar-webkit md:mt-0 mt-4 px-4 py-5 ${isCollapsed ? 'opacity-100' : 'md:opacity-100 opacity-10'}`}>
      <div className={`flex flex-col items-start justify-start ${isCollapsed ? 'lg:w-[80%] mx-auto' : 'w-full'}`}>
        <Button className="w-auto !mt-0 mb-4" text={"← Back to Home"} onClick={() => navigate('/')} />
        <h1 className="header-2 mb-2">Experience & Education</h1>

        <section className="flex flex-col md:flex-row gap-2 w-full mt-4">
          <div className="h-auto flex-1">
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
              <div className="paragraph text-justify my-5">
                <ul>
                  What I bring to the table:
                  {experienceSummary.map((text, index) => (
                    <li key={index} className="text-xs my-2">♦️ {text}</li>
                  ))}
                </ul>
                <Button className="w-auto" text={'Open CV'} onClick={() => window.open(linkData.resume, '_blank')} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full items-center flex-1 md:px-10">
            {activeTab === 'experience'
              ? experienceList.map((experience, index) => (
                  <ExperienceCard key={index} experience={experience} />
                ))
              : educationList.map((education, index) => (
                  <EducationCard key={index} education={education} />
                ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
