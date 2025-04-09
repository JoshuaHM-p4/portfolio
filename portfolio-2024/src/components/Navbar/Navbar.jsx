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
    { icon: <DummyIcon />, text: 'interests', destination: '/interests' },
    { icon: <DummyIcon />, text: 'experiences', destination: '/experiences' },
    { icon: <DummyIcon />, text: 'projects', destination: '/projects' },
  ];

  return (
    <div className={`h-full flex flex-col items-center transition-all duration-300
      ${isCollapsed ? "w-20" : "w-full md:w-72"}`}>

      {/* Toggle Button */}
      <div className={`flex ${isCollapsed ? 'w-fit justify-center' : 'w-full justify-end items-end'} h-10 hover:bg-white-500 hover:bg-opacity-25`}>
        <button
          onClick={toggleNavbar}
          className={`${isCollapsed ? 'nav-button h-10' : 'hover:nav-button h-10'} w-16 max-w-16 transition-all duration-300`}
        >
          {isCollapsed ? "⮞" : "⮜"}
        </button>
      </div>


      {/* Profile Section */}
      {!isCollapsed && (
        <div className="flex flex-col h-fit w-full items-center pb-5">
          <div className="rounded-full bg-slate-50 h-52 w-52 p-16"></div>

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
      <div className={`justify-center items-center h-full flex md:flex-col md:gap-2 md:w-full`}>
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
        isActive ? 'nav-button nav-link nav-active ' + (isCollapsed ? 'opacity-50 rounded-l w-16 h-16' : '')
          : 'nav-button nav-link' + (isCollapsed ? 'rounded-l w-16 h-16' : ''))}
      to={destination}
    >
      &#91; {isCollapsed ? '' : text} &#93;
    </NavLink>
  );
}
export default Navbar;