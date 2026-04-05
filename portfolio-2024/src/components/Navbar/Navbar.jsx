import React from "react";
import { NavLink } from "react-router-dom";
import linkData from "../../data/links.json";
import { useSectionObserver } from '../../context/SectionObserverContext';

//  icons
import HomeIcon from "../../svg/home.svg?react";
import AboutIcon from "../../svg/about.svg?react";
import ExperienceIcon from "../../svg/experience.svg?react";
import ProjectIcon from "../../svg/folder.svg?react";

const Navbar = ({ isCollapsed, toggleNavbar }) => {
  const { activeSection } = useSectionObserver();

  const navItems = [
    { icon: <HomeIcon className="w-5 h-5 text-black-400 stroke-current fill-current" />, text: 'home', destination: 'home' },
    { icon: <AboutIcon className="w-5 h-5 text-black-400 stroke-current" />, text: 'about', destination: 'about' },
    { icon: <ExperienceIcon className="w-5 h-5 text-black-400 stroke-current" />, text: 'experiences', destination: 'experiences' },
    { icon: <ProjectIcon className="w-5 h-5 text-black-400 stroke-current" />, text: 'projects', destination: 'projects' },
  ];

  return (
    <div
      className={`${isCollapsed ? "w-14 bg-white/0 bg-transparent h-auto" : "h-full w-full bg-white-500/10 backdrop-blur-xl md:w-72 md:bg-transparent overflow-y-auto scrollbar-thin scrollbar-webkit rounded-xl md:rounded-xl"}
      fixed z-50 top-0 left-0 flex-col items-center transition-all duration-800 ease-in-out md:static  shadow-lg md:shadow-none`}
    >
      {/* Toggle Button */}
      <div className={`flex rounded-2xl ${isCollapsed ? 'justify-center p-2' : 'justify-end items-center py-2 hover:bg-white-500/50 hover:shadow-sm m-2'} w-auto h-10`}>
        <button
          onClick={toggleNavbar}
          className={`${isCollapsed ? 'nav-button h-10' : 'md:hover:nav-button h-10'} w-14 max-w-14 hover:bg-white-500/50 rounded-2xl`}
        >
          {isCollapsed ? "⮞" : "⮜"}
        </button>
      </div>


      {/* Profile Section */}
      {!isCollapsed && (
        <div className="flex flex-col h-fit w-full items-center">
          <div className="rounded-full bg-slate-50 md:w-32 md:h-32 w-52 h-52 relative opacity-90">
            <img src="./img/profile.jpg" alt="Profile" className="rounded-full w-full h-full object-cover" />
          </div>

          <div className="flex flex-col items-center mt-2">
            <h1 className="header-2">Joshua Mistal</h1>
            <p className="description font-bold">ML Specialization</p>
            <p className="caption">Manila, PH</p>
          </div>

          <div className="flex justify-between mt-2 md:mx-0 mx-5 h-10 border-b-2 rounded-md border-transparent hover:border-white-100 transition-all ease-in-out self-stretch">
            <a className="nav-profile-link rounded-tl-md rounded-bl-md" href={linkData.linkedin} target="_blank" rel="noopener noreferrer">
              contact
            </a>
            <a className="nav-profile-link rounded-tr-md rounded-br-md" href={linkData.resume} target="_blank" rel="noopener noreferrer">
              resume
            </a>
          </div>
        </div>
      )
      }

      {/* Nav Buttons */}
      <div className={`${isCollapsed ? 'hidden mt-2 align-middle items-center' : 'flex'}  md:flex flex-col gap-2 p-5 md:w-full `}>
        {navItems.map((item, index) => (
          <NavButton
            key={index}
            icon={item.icon}
            isCollapsed={isCollapsed}
            text={item.text}
            activeSection={activeSection}
            destination={item.destination}
          />
        ))}
      </div>
    </div>
  );
};

const NavButton = ({ icon, text = 'tooltip text', destination, activeSection, isCollapsed = false }) => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const baseClass = 'nav-link nav-button';
  const activeClass = activeSection === destination ? 'nav-active' : '';
  const collapsedClass = isCollapsed ? 'opacity-50 rounded-2xl w-10 h-10' : '';

  return (
    <button
      className={`${baseClass} ${activeClass} ${collapsedClass}`}
      onClick={() => handleScroll(destination)}
    >
      {isCollapsed ?
        (icon) :
        <>
          &#91; {isCollapsed ? '' : text} &#93;
        </>
      }
    </button>
  );
}

export default Navbar;
