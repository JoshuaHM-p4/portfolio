import React from "react";
import { NavLink } from "react-router-dom";
import linkData from "../../data/links.json";

const DummyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
);

const Navbar = ({ isCollapsed, toggleNavbar }) => {
  const navItems = [
    { icon: <DummyIcon />, text: 'home', destination: '/' },
    { icon: <DummyIcon />, text: 'about', destination: '/about' },
    { icon: <DummyIcon />, text: 'experiences', destination: '/experiences' },
    { icon: <DummyIcon />, text: 'projects', destination: '/projects' },
    // { icon: <DummyIcon />, text: 'interests', destination: '/interests' },
  ];

  return (
    <div className={`${isCollapsed ? "w-14 bg-opacity-0 backdrop-blur-none bg-transparent" : "w-full bg-opacity-70 backdrop-blur-xl md:backdrop-blur-none md:w-72 md:bg-transparent"}
      fixed z-10 top-0 left-0 rounded-lg flex-col items-center transition-all duration-800 ease-in-out md:static h-full`}>
      {/* Toggle Button */}
      <div className={`flex ${isCollapsed ? 'justify-center' : 'justify-end items-end'} p-2 w-full h-10 hover:bg-white-500 hover:bg-opacity-25`}>
        <button
          onClick={toggleNavbar}
          className={`${isCollapsed ? 'nav-button h-10' : 'md:hover:nav-button h-10'} w-14 max-w-14 transition-all duration-800`}
        >
          {isCollapsed ? "⮞" : "⮜"}
        </button>
      </div>


      {/* Profile Section */}
      {!isCollapsed && (
        <div className="flex flex-col h-fit w-full items-center">
          <div className="rounded-full bg-slate-50 md:w-32 md:h-32 w-52 h-52 p-14"></div>

          <div className="flex flex-col items-center mt-2">
            <h1 className="header-1">Joshua Mistal</h1>
            <p className="description font-bold">ML Specialization</p>
            <p className="caption">Manila, PH</p>
          </div>

          <div className="flex justify-between mt-2 border-b-2 border-transparent hover:border-white-100 pb-3 self-stretch">
            <a className="nav-profile-link" href={linkData.linkedin} target="_blank" rel="noopener noreferrer">
              contact
            </a>
            <a className="nav-profile-link" href={linkData.resume} target="_blank" rel="noopener noreferrer">
              resume
            </a>
          </div>
        </div>
      )}

      {/* Nav Buttons */}
      <div className={`${isCollapsed ? 'hidden mt-2 align-middle items-center' : 'flex'}  md:flex flex-col gap-2 p-5 md:w-full`}>
        {navItems.map((item, index) => (
          <NavButton
            key={index}
            icon={item.icon}
            isCollapsed={isCollapsed}
            text={item.text}
            destination={item.destination}
          />
        ))}
      </div>
    </div>
  );
};

const NavButton = ({ icon, text = 'tooltip text', destination, isCollapsed = false }) => {
  return (
    <NavLink
      className={({ isActive }) => (
        isActive ? 'nav-button nav-link nav-active ' + (isCollapsed ? 'opacity-50 rounded-l w-14 h-14' : '')
          : 'nav-button nav-link' + (isCollapsed ? 'rounded-l w-14 h-14' : ''))}
      to={destination}
    >
      &#91; {isCollapsed ? '' : text} &#93;
    </NavLink>
  );
}
export default Navbar;