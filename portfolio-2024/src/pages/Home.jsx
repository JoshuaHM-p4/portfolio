import { useState } from 'react';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';
import EducationCard from '../components/EducationCard';
import NotebookCard from '../components/NotebookCard';

import linkData from "../data/links.json";
import experienceSummary from "../data/experienceSummary.json";
import experienceList from "../data/experience.json";
import educationList from "../data/education.json";
import notebooksList from "../data/notebooks.json";
import projects from "../data/projects.json";

import About from '../sections/About';

import { useNavbar } from '../context/NavbarContext';

const Home = () => {
  const { isCollapsed } = useNavbar();
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className={`h-full w-full overflow-y-auto scrollbar-thin scrollbar-webkit md:mt-0 mt-4 px-4 py-5 ${isCollapsed ? 'opacity-100 flex flex-row' : 'md:opacity-100 opacity-10'}`}>
      <div
        className={`flex flex-col items-start justify-start transition-all duration-300 overflow-x-hidden lg:overflow-visible
        ${isCollapsed ? "lg:w-[80%]  mx-auto" : "w-full"}`}
      >

        <About />

        <h1 className='header-3 mt-10'>Things I&apos;ve Recently Built</h1>
        <div className="w-full grid gap-5 mt-2 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] auto-cols-[300px]">
          {projects.map((project, index) =>
            <ProjectCard key={index} project={project} />
          )}
        </div >
        <Button className="w-auto rounded-md" text={"See All Projects"} onClick={() => { }} />

        {/* Recent Notebooks */}
        <h1 className="header-3 mt-10">Recent Notebooks</h1>
        <div className="w-full gap-2 mt-2 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] auto-cols-[200px]">
          {
            notebooksList.map((notebook, index) => (
              <NotebookCard key={index} notebook={notebook} />
            )
            )
          }
        </div>
        <Button className="w-auto rounded-md" text={"See all notebooks"} onClick={() => { }} />

        <div className="flex flex-col md:flex-row gap-2 w-full mt-10">
          {/* Experience Summary */}
          <div className="h-auto flex-1">
            <div className="flex flex-col gap-1 w-full md:sticky md:top-0 bg-white z-10">
              <h1 className="header-3 text-start">My Background Expertise</h1>
              <div className="inline-flex rounded-md shadow-xs w-full sticky top-0 md md:relative" role="group">
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
          <div className='flex flex-col gap-2 w-full items-center flex-1 md:px-10'>
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
      </div>
    </div>
  );
}

export default Home;
