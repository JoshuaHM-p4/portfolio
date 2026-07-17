import { createContext, useContext, useState, useEffect } from 'react';

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    console.log('Navbar toggled');
    setIsCollapsed(prev => !prev);
  }

  useEffect(() => {
    const handleResize = () => {
      // Always force collapsed on mobile widths; never auto-expand on resize,
      // so collapsed stays the default until the user manually toggles it.
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <NavbarContext.Provider value={{ isCollapsed, toggleNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => useContext(NavbarContext);
