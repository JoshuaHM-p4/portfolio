import Button from '../components/Button';
import SkillsMarquee from '../components/SkillsMarquee';
import PictureCard from '../components/PictureCard';
import GithubIcon from '../svg/github.svg?react';
import LinkedInIcon from '../svg/linkedin.svg?react';

import linkData from "../data/links.json";
import skills from "../data/skills.json";
import { useNavbar } from '../context/NavbarContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const About = () => {
  const { isCollapsed } = useNavbar();

  useGSAP(() => {
    gsap.fromTo('.gsap-title-horizontal',
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
    );
  }, [isCollapsed]);

  return (
    <section id="about" className="w-full bg-transparent lg:min-h-[80vh] lg:flex lg:flex-col lg:justify-center">
      <div className={`w-full sm:flex flex-row h-fit items-start relative gsap-animate-up ${isCollapsed ? 'sm:gap-5' : 'sm:gap-0'}`}>
        {/* Personal Picture Card */}
        <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden origin-left flex-shrink-0 ${isCollapsed ? 'w-56 opacity-100 scale-100' : 'w-0 opacity-0 scale-50'}`}>
          <div className="w-56 h-full">
            <PictureCard image={"/img/profile.jpg"} title={"Joshua Mistal"} description={"ML Specialization"} />
          </div>
        </div>

        <div className='relative z-20 gsap-animate-text flex-1'>
          <div className="flex w-full h-full sm:justify-between justify-end my-1 items-center">

            {isCollapsed ? (
              <h1 className='header-1 mb-2 hidden sm:block gsap-title-horizontal'>Joshua Mistal</h1>
            ) : (
              <h1 className='header-2 mb-2 gsap-title-horizontal'>About Me</h1>
            )}

            <div className="gap-1 hidden sm:flex z-10">
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
          <div className="lg:max-w-3xl ml-0 mr-auto">
            <p className='paragraph mt-2 max-w-prose text-left!'>
              Computer Engineer with a focus on Machine Learning Specialization. I self-developed myself with experience adapted through organizational teams and software development, through technical expertise and active contributions to student developer communities, and knowledge-sharing efforts, and finding ways to bring real-world impact.
            </p>
            {/* Button */}
            <Button className="w-auto ml-0 mr-auto" text={"Let's Chat"} onClick={() => { }} />
          </div>
        </div>
      </div>


      {/* skills marquee */}
      <h1 className={`header-3 mt-10 gsap-animate-text ${isCollapsed ? 'md:text-center' : 'md:text-start'}`}>Skills</h1>
      <div className="w-full bg-white-500/10 backdrop-blur-md border border-white-100 rounded-2xl shadow-md px-4 lg:px-6 lg:py-2 mt-2">
        <SkillsMarquee skills={skills} />
      </div>
    </section>
  )
}

export default About;

