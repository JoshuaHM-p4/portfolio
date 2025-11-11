// src/context/SectionObserverContext.js
import { createContext, useState, useContext } from 'react';

const SectionObserverContext = createContext();

export const SectionObserverProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <SectionObserverContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </SectionObserverContext.Provider>
  );
};

export const useSectionObserver = () => useContext(SectionObserverContext);

