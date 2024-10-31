const Navbar = ({ navItems }) => {  return (
    <div className="navbar">
      <div className="profile-card">
        <div className="dummy-icon"></div>
        <h1 className="header-1">Joshua Mistal</h1>
        <p className="description">ML Specialization</p>
      </div>
      <div className="nav-container bg-black">
        {navItems?.map((item, index) => (
          <NavButton key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
}

const NavButton = ({ icon, text = 'tooltip text' }) => {
  return (
    <button className="nav-button">
      {icon}
      <h4 className="nav-link">{text}</h4>
    </button>
  );
}
export default Navbar;