import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSectionObserver } from '../context/SectionObserverContext';
import Button from '../components/Button';
import SkillCard from '../components/SkillCard';
import PictureCard from '../components/PictureCard';
import GithubIcon from '../svg/github.svg?react';
import LinkedInIcon from '../svg/linkedin.svg?react';

import linkData from "../data/links.json";
import skills from "../data/skills.json";
import { useNavbar } from '../context/NavbarContext';

const About = () => {
  const { isCollapsed } = useNavbar();
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { setActiveSection } = useSectionObserver();

  useEffect(() => {
    if (inView) setActiveSection('home');
  }, [inView]);

  return (
    <section id="home" ref={ref} className="bg-transparent">
      <div className='w-full sm:flex flex-row h-fit items-start sm:gap-5 relative'>
        {/* Personal Picture Card */}
        {isCollapsed &&
          <PictureCard image={"./img/profile.jpg"} title={"Joshua Mistal"} description={"ML Specialization"} />
        }

        {/* Profile Heading */}
        <div className='relative z-20'>
          <div className="flex w-full h-full sm:justify-between justify-end my-1">
            {isCollapsed ? (
              <>
                <h1 className='header-1 mb-2 hidden sm:block'>Joshua Mistal</h1>
              </>
            ) : (
              <h1 className='header-2 mb-2'>About Me</h1>
            )}
            <div className="gap-1 hidden sm:flex ">
              <a href={linkData.linkedin} target="_blank" rel="noopener noreferrer" className="nav-profile-link">
                <LinkedInIcon className="linkIcon" />
              </a>
              <a href={linkData.github} target="_blank" rel="noopener noreferrer" className="nav-profile-link">
                <GithubIcon className="linkIcon" />
              </a>
            </div>
          </div>
          <p className="hidden sm:block description italic font-normal">Manila, PH</p>
          {/* About Me Description */}
          <p className='paragraph mt-2'>
            Computer Engineer with a focus on Machine Learning Specialization. I self-developed myself with experience adapted through organizational teams and software development, through technical expertise and active contributions to student developer communities, and knowledge-sharing efforts, and finding ways to bring real-world impact.
          </p>
          {/* Button */}
          <Button className="rounded-md w-auto" text={"Let's Chat"} onClick={() => { }} />
        </div>
      </div>


      {/* skill grid  */}
      <h1 className='header-3 mt-10 text-start'>Skills</h1>
      <div className="w-full grid gap-2 mt-2 grid-cols-[repeat(auto-fill,minmax(86px,1fr))] auto-cols-[86px]">
        {skills.map((skill, index) =>
        (
          <SkillCard key={index} skill={skill} />
        )
        )}
      </div>
    </section>
  )
}

export default About;

