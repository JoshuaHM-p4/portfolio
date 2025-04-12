import { createContext, useContext, useState, useEffect } from 'react';

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 768);

  const toggleNavbar = () => {
    console.log('Navbar toggled');
    setIsCollapsed(prev => !prev);
  }

  useEffect(() => {
    const handleResize = () => {
      // Collapse if below md (768px), else expand
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Set initial state
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <NavbarContext.Provider value={{ isCollapsed, toggleNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => useContext(NavbarContext);
