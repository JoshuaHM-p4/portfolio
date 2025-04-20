import { useState } from 'react';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import SkillCard from '../components/SkillCard';
import PictureCard from '../components/PictureCard';
import GithubIcon from '../svg/github.svg?react';
import LinkedInIcon from '../svg/linkedin.svg?react';
import ExperienceCard from '../components/ExperienceCard';
import EducationCard from '../components/EducationCard';

import linkData from "../data/links.json";
import skills from "../data/skills.json";
import experienceSummary from "../data/experienceSummary.json";
import experienceList from "../data/experience.json";
import educationList from "../data/education.json";
import projects from "../data/projects.json";

import { useNavbar } from '../context/NavbarContext';

const Home = () => {
  const { isCollapsed } = useNavbar();
  const [activeTab, setActiveTab] = useState("experience")


  return (
    <div className={`h-full w-full overflow-y-auto scrollbar-thin scrollbar-webkit md:mt-0 mt-4 px-4 py-5 ${isCollapsed ? 'opacity-100 flex flex-row' : 'md:opacity-100 opacity-10'}`}>
      <div
        className={`flex flex-col items-start justify-start transition-all duration-300 overflow-x-hidden lg:overflow-visible
        ${isCollapsed ? "lg:w-[80%]  mx-auto" : "w-full"}`}
      >
        <div className='w-full md:flex flex-row h-fit items-start md:gap-5 relative'>
          {/* Personal Picture Card */}
          {isCollapsed &&
            <PictureCard image={"./img/profile.jpg"} title={"Joshua Mistal"} description={"ML Specialization"} />
          }

          {/* Profile Heading */}
          <div className='relative z-20'>
            <div className="flex w-full h-full md:justify-between justify-end my-1">
              {isCollapsed ? (
                <>
                  <h1 className='header-1 mb-2 hidden md:block'>Joshua Mistal</h1>
                </>
              ) : (
                <h1 className='header-2 mb-2'>About Me</h1>
              )}
              <div className="gap-1 hidden md:flex ">
                <a href={linkData.linkedin} target="_blank" rel="noopener noreferrer" className="nav-profile-link">
                  <LinkedInIcon className="linkIcon" />
                </a>
                <a href={linkData.github} target="_blank" rel="noopener noreferrer" className="nav-profile-link">
                  <GithubIcon className="linkIcon" />
                </a>
              </div>
            </div>
            <p className="hidden md:block description italic font-normal">Manila, PH</p>
            {/* About Me Description */}
            <p className='paragraph mt-2'>
              Computer Engineer with a focus on Machine Learning Specialization. I self-developed myself with experience adapted through organizational teams and software development, through technical expertise and active contributions to student developer communities, and knowledge-sharing efforts, and finding ways to bring real-world impact.
            </p>
            {/* Button */}
            <Button className="rounded-md w-auto" text={"Let's Chat"} onClick={() => { }} />
          </div>
        </div>


        {/* skill grid  */}
        <h1 className='header-3 mt-10'>Skills</h1>
        <div className="w-full grid gap-2 mt-2 grid-cols-[repeat(auto-fill,minmax(86px,1fr))] auto-cols-[86px]">
          {skills.map((skill, index) =>
          (
            <SkillCard key={index} skill={skill} />
          )
          )}
        </div>

        {/* Recent Work */}
        <h1 className='header-3 mt-10'>Things I&apos;ve Recently Built</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-2">
          {projects.map((project, index) =>
            <ProjectCard key={index} project={project} />
          )}
        </div >
        <Button className="w-auto rounded-md" text={"See All Projects"} onClick={() => { }} />

        {/* <h1 className="header-3 mt-10">Jupyter Notebooks</h1>
        <div className="w-full grid gap-2 mt-2 grid-cols-[repeat(auto-fill, minmax(130px, 1fr) auto-cols-[130px]"></div> */}

        <div className="flex flex-col md:flex-row gap-2 w-full mt-10">
          {/* Experience Summary */}
          <div className="h-auto flex-1">
            <div className="flex flex-col gap-1 w-full md:sticky md:top-0 bg-white z-10">
              <h1 className="header-3 text-start">My Background Expertise</h1>
              <div className="inline-flex rounded-md shadow-xs w-full" role="group">
                <Button
                  className="rounded-l-md border-r-0 flex-1"
                  active={activeTab === "experience"}
                  text={"Experience"}
                  onClick={() => { setActiveTab("experience") }}
                />
                <Button
                  className="rounded-r-md flex-1"
                  active={activeTab === "education"}
                  text={"Education"}
                  onClick={() => { setActiveTab("education") }}
                />
              </div>
              <p className="paragraph text-justify my-5">
                <ul>
                  What I bring to the table:
                  {experienceSummary.map((text, index) => (
                    <li key={index} className="text-sm my-2">♦️ {text}</li>
                  ))}
                </ul>
                <Button className="w-auto rounded-md" text={"Open CV"} onClick={() => { window.open(linkData.resume, "_blank") }} />
              </p>
            </div>
          </div>
          {/* Experience / Education */}
          <div className='flex flex-col gap-2 w-full items-center flex-1 px-10'>
            {
              activeTab === "experience" ? (
                experienceList.map((experience, index) => (
                  <ExperienceCard key={index} experience={experience} />
                ))
              ) :
                (
                  educationList.map((education, index) => (
                    <EducationCard key={index} education={education} />
                  ))
                )
            }
          </div>
        </div>

      </div >
    </div>
  );
}

export default Home;
