import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSectionObserver } from '../context/SectionObserverContext';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';
import EducationCard from '../components/EducationCard';
import NotebookCard from '../components/NotebookCard';
import { slugify } from '../utils/slug';

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
  const [activeTab, setActiveTab] = useState("experience");
  const { setActiveSection } = useSectionObserver();
  const location = useLocation();
  const navigate = useNavigate();

  // Intersection Observers for Sections
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.2 });
  const { ref: notebooksRef, inView: notebooksInView } = useInView({ threshold: 0.2 });
  const { ref: experienceRef, inView: experienceInView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;
    const tryScroll = () => {
      if (target === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    const t = setTimeout(tryScroll, 350);
    return () => clearTimeout(t);
  }, [location.state]);

  useEffect(() => {
    if (projectsInView) {
      setActiveSection('projects');
    }
  }, [projectsInView, setActiveSection]);

  useEffect(() => {
    if (notebooksInView) {
      setActiveSection('notebooks');
    }
  }, [notebooksInView, setActiveSection]);

  useEffect(() => {
    if (experienceInView) {
      setActiveSection('experiences');
    }
  }, [experienceInView, setActiveSection]);

  return (
    <div className={`h-full w-full overflow-y-auto scrollbar-thin scrollbar-webkit md:mt-0 mt-4 px-4 py-5 ${isCollapsed ? 'opacity-100' : 'md:opacity-100 opacity-10'}`}>
      <div
        className={`flex flex-col items-start justify-start transition-all duration-300 overflow-x-hidden lg:overflow-visible
        ${isCollapsed ? "lg:w-[80%]  mx-auto" : "w-full"}`}
      >

        <About />

        <section id="projects" ref={projectsRef} className="w-full mt-10">
          <h1 className={`header-3 ${isCollapsed ? 'md:text-center' : 'md:text-start'}`}>Things I&apos;ve Recently Built</h1>
          <div className="w-full grid gap-3 mt-2 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] auto-cols-[300px]">
            {projects.filter((p) => p.highlight).map((project, index) =>
              <Link key={index} to={`/projects/${slugify(project.name)}`} className="block h-full hover:scale-[1.01] transition-transform">
                <ProjectCard project={project} />
              </Link>
            )}
          </div >
          <SeeAllButton text="See All Projects" onClick={() => navigate('/projects')} />
        </section>

        {/* Recent Notebooks */}
        <section id="notebooks" ref={notebooksRef} className="w-full mt-10">
          <h1 className={`header-3 ${isCollapsed ? 'md:text-center' : 'md:text-start'}`}>Recent Notebooks</h1>
          <div className="w-full grid gap-3 mt-2 grid-cols-[repeat(auto-fill,minmax(220px,1fr))] auto-cols-[220px]">
            {
              notebooksList.filter((n) => n.highlight).map((notebook, index) => (
                <Link key={index} to={`/notebooks/${notebook.id}`} className="block h-full hover:scale-[1.01] transition-transform">
                  <NotebookCard notebook={notebook} />
                </Link>
              )
              )
            }
          </div>
          <SeeAllButton text="See All Notebooks" onClick={() => navigate('/notebooks')} />
        </section>

        <section id="experiences" ref={experienceRef} className="flex flex-col md:flex-row gap-2 w-full mt-10">
          {/* Experience Summary */}
          <div className="h-auto flex-1">
            <div className="flex flex-col gap-1 w-full md:sticky md:top-0 z-10">
              <h1 className="header-3 text-start">My Background Expertise</h1>
              <div className="inline-flex shadow-xs w-full sticky top-0 md md:relative" role="group">
                <Button
                  className="!rounded-none !rounded-l-full md:!rounded-l-2xl border-r-0 flex-1"
                  active={activeTab === "experience"}
                  text={"Experience"}
                  onClick={() => { setActiveTab("experience") }}
                />
                <Button
                  className="!rounded-none !rounded-r-full md:!rounded-r-2xl flex-1"
                  active={activeTab === "education"}
                  text={"Education"}
                  onClick={() => { setActiveTab("education") }}
                />
              </div>
              <div className="paragraph text-justify my-5">
                <ul>
                  What I bring to the table:
                  {experienceSummary.map((text, index) => (
                    <li key={index} className="text-xs my-2">♦️ {text}</li>
                  ))}
                </ul>
                <Button className="w-auto" text={"Open CV"} onClick={() => { window.open(linkData.resume, "_blank") }} />
              </div>
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
        </section>
      </div>
    </div>
  );
}

const SeeAllButton = ({ text, onClick }) => (
  <div className="group relative w-full">
    {/* base soft fade */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 -top-24 bottom-0
        bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.04)_50%,rgba(255,255,255,0.18)_100%)]
        md:rounded-b-2xl rounded-b-full"
    />
    {/* hover fade — same shape, brighter; cross-fades in so no hard edge */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 -top-24 bottom-0
        bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.12)_50%,rgba(255,255,255,0.5)_100%)]
        opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out
        md:rounded-b-2xl rounded-b-full"
    />
    <button
      type="button"
      onClick={onClick}
      className="relative w-full py-3 flex flex-col items-center justify-center gap-1
        cursor-pointer md:rounded-b-2xl rounded-b-full
        font-texturina text-black-400 text-sm tracking-wide"
      aria-label={text}
    >
      <span>{text}</span>
      <svg
        aria-hidden="true"
        width="14" height="8" viewBox="0 0 14 8"
        fill="none" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"
        className="transition-transform duration-200 group-hover:translate-y-0.5"
      >
        <polyline points="1,1 7,7 13,1" />
      </svg>
    </button>
  </div>
);

export default Home;
