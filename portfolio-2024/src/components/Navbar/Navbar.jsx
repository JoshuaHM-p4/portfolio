import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import linkData from "../../data/links.json";
import { useSectionObserver } from '../../context/SectionObserverContext';

//  icons
import HomeIcon from "../../svg/home.svg?react";
import AboutIcon from "../../svg/about.svg?react";
import ExperienceIcon from "../../svg/experience.svg?react";
import ProjectIcon from "../../svg/folder.svg?react";
import NotebookIcon from "../../svg/notebook.svg?react";
import CoursesIcon from "../../svg/courses.svg?react";
import CommunityIcon from "../../svg/community.svg?react";

const Navbar = ({ isCollapsed, toggleNavbar }) => {
  const { activeSection } = useSectionObserver();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const allNavItems = [
    { icon: <HomeIcon className="w-5 h-5 stroke-current fill-current transition-colors" />, text: 'home', destination: 'home', path: '/', showOnlyOffHome: true },
    { icon: <AboutIcon className="w-5 h-5 stroke-current transition-colors" />, text: 'about', destination: 'about', path: '/about' },
    { icon: <ProjectIcon className="w-5 h-5 stroke-current transition-colors" />, text: 'projects', destination: 'projects', path: '/projects' },
    { icon: <NotebookIcon className="w-5 h-5 stroke-current transition-colors" />, text: 'notebooks', destination: 'notebooks', path: '/notebooks' },
    { icon: <ExperienceIcon className="w-5 h-5 stroke-current transition-colors" />, text: 'experiences', destination: 'experiences', path: '/experience' },
    { icon: <CoursesIcon className="w-5 h-5 stroke-current transition-colors" />, text: 'courses', destination: 'courses', path: '/courses' },
    { icon: <CommunityIcon className="w-5 h-5 stroke-current transition-colors" />, text: 'community', destination: 'community', path: '/community' },
  ];

  return (
    <div
      className={`${isCollapsed ? "w-14 bg-white/0 bg-transparent h-auto" : "h-full w-full bg-white-500/10 backdrop-blur-xl md:w-72 md:bg-transparent overflow-y-auto [&::-webkit-scrollbar]:hidden [scrollbar-width:none] rounded-xl md:rounded-xl"}
      fixed z-50 top-0 left-0 flex-col items-center transition-all duration-800 ease-in-out md:static  shadow-lg md:shadow-none`}
    >
      {/* Toggle Button */}
      <div className={`flex items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isCollapsed ? 'w-full h-14 justify-center mt-0' : 'w-[calc(100%-1rem)] mx-auto h-10 px-1 mt-2 bg-white-500/10 rounded-full shadow-inner'}`}>
        <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isCollapsed ? 'w-[0%]' : 'w-full'}`} />
        <button
          onClick={toggleNavbar}
          className={`flex-shrink-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white-500/80 hover:shadow-md ${isCollapsed ? 'h-10 w-10 rounded-2xl bg-transparent' : 'h-8 w-12 rounded-full bg-white-500/50 shadow-sm'}`}
        >
          {isCollapsed ? "⮞" : "⮜"}
        </button>
      </div>


      {/* Profile Section */}
      <div className={`flex flex-col w-full items-center overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isCollapsed ? 'max-h-0 opacity-0 scale-90 mb-0' : 'max-h-[500px] opacity-100 scale-100 mb-5'}`}>
        <div className="rounded-full bg-slate-50 md:w-32 md:h-32 w-52 h-52 relative opacity-90 mt-2">
          <img src="./img/profile.jpg" alt="Profile" className="rounded-full w-full h-full object-cover" />
        </div>

        <div className="flex flex-col items-center mt-2">
          <h1 className="header-2">Joshua Mistal</h1>
          <p className="description font-bold">ML Specialization</p>
          <p className="caption">Manila, PH</p>
        </div>

        <div className="flex justify-between mt-2 md:mx-0 mx-5 h-10 border-b-2 md:rounded-2xl rounded-full border-transparent hover:border-white-100 transition-all ease-in-out self-stretch">
          <a className="nav-profile-link rounded-l-full md:rounded-l-2xl" href={linkData.linkedin} target="_blank" rel="noopener noreferrer">
            contact
          </a>
          <a className="nav-profile-link rounded-r-full md:rounded-r-2xl" href={linkData.resume} target="_blank" rel="noopener noreferrer">
            resume
          </a>
        </div>
      </div>

      {/* Nav Buttons */}
      <div className={`flex flex-col gap-2 transition-all duration-700 md:w-full ${isCollapsed ? 'p-2' : 'p-5'} w-full items-center`}>
        {allNavItems.map((item, index) => {
          const isHidden = item.showOnlyOffHome && isHome;
          return (
            <div key={index} className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden w-full flex justify-center ${isHidden ? 'h-0 opacity-0 scale-50 m-0' : 'h-10 opacity-100 scale-100'}`}>
              <NavButton
                icon={item.icon}
                isCollapsed={isCollapsed}
                text={item.text}
                activeSection={activeSection}
                destination={item.destination}
                path={item.path}
                isHome={isHome}
                currentPath={location.pathname}
                navigate={navigate}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const NavButton = ({ icon, text = 'tooltip text', destination, path, activeSection, isCollapsed = false, isHome = true, currentPath = '/', navigate }) => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isHomeBtn = destination === 'home';
  const isActiveSection = isHome && activeSection === destination;
  const isActivePage = !isHome && path && path !== '/' && currentPath === path;
  // "armed" — already at this section on home AND a detail page exists → next click opens the page
  const armed = isHome && isActiveSection && !!path && !isHomeBtn;

  const handleClick = () => {
    if (isHomeBtn) {
      // Home button: when off-home, return to /; never armed.
      navigate('/', { state: { scrollTo: 'home' } });
      return;
    }
    if (!isHome) {
      // Off-home: any other button → jump straight to its dedicated page.
      if (path) navigate(path);
      else navigate('/', { state: { scrollTo: destination } });
      return;
    }
    if (armed) {
      navigate(path);
    } else {
      handleScroll(destination);
    }
  };

  const baseClass = 'nav-link nav-button water-fill-btn';
  const activeClass = isActiveSection || isActivePage ? 'is-active' : '';
  const armedClass = armed ? 'nav-armed' : '';

  return (
    <button
      className={`${baseClass} ${activeClass} ${armedClass} relative flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isCollapsed ? 'w-10 h-10 rounded-2xl mx-auto' : 'w-full h-10'}`}
      onClick={handleClick}
      title={armed ? `Open ${text} page` : path ? `Scroll to ${text} — click again to open page` : text}
      aria-label={armed ? `Open ${text} page` : text}
    >
      <div className={`absolute flex items-center justify-center transition-all duration-500 ${isCollapsed ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
        {icon}
        {armed && (
          <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-black/70" />
        )}
      </div>

      <div className={`absolute whitespace-nowrap transition-all duration-500 ${isCollapsed ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
        &#91; {text}{armed ? ' ›' : ''} &#93;
      </div>
    </button>
  );
}

export default Navbar;
