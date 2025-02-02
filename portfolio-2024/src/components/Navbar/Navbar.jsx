import React from "react";
import { Link } from "react-router-dom";
import linkData from "../../data/links.json";

const DummyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
);

const Navbar = () => {
  const navItems = [
    { icon: <DummyIcon />, text: 'home', destination: '/' },
    { icon: <DummyIcon />, text: 'about', destination: '/about' },
    { icon: <DummyIcon />, text: 'interests', destination: '/interests' },
    { icon: <DummyIcon />, text: 'experiences', destination: '/experiences' },
    { icon: <DummyIcon />, text: 'projects', destination: '/projects' },
  ];

  return (
    <div className="h-full rounded-md items-center flex flex-col w-full md:w-72">
      {/* Profile Container */}
      <div className="flex flex-col h-fit w-full items-center pb-5 rounded-md hover:bg-opacity-30 transition-all ease-in-out">
        <div className="rounded-full bg-slate-50 h-52 w-52 p-16"></div>

        {/* Profile Info */}
        <div className="flex flex-col items-center mt-2">
          <h1 className="header-1">Joshua Mistal</h1>
          <p className="description font-bold">ML Specialization</p>
          <p className="description">Manila, PH</p>
        </div>

        {/* Contacts and Resume */}
        <div className="flex justify-between align-bottom mt-2 transition-colors border-transparent border-b-2 hover:border-white-100 pb-3 self-stretch mx-5">
          <a className="nav-profile-link" href={linkData.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a>
          <a className="nav-profile-link" href={linkData.resume} target="_blank" rel="noopener noreferrer">resume</a>
        </div>
      </div>

      {/* Nav Container and Buttons */}
      <div className="mt-1 justify-between h-fit overflow-x-scroll flex md:flex-col md:gap-2 md:w-full md:overflow-hidden">
        {navItems.map((item, index) => (
          <NavButton key={index} icon={item.icon} text={item.text} destination={item.destination}/>
        ))}
      </div>
    </div>
  );
}

const NavButton = ({ icon, text = 'tooltip text', destination }) => {
  return (
    <button className="nav-button">
      <Link className="nav-link" to={destination} >&#91; {text} &#93;</Link>
    </button>
  );
}
export default Navbar;