import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Background from "./Background/Background";
import { useNavbar } from '../context/NavbarContext';
import { SectionObserverProvider } from '../context/SectionObserverContext';
import { refractive } from "@hashintel/refractive";

const MainLayout = () => {
  const { isCollapsed, toggleNavbar } = useNavbar();
  return (
    <div className='relative w-screen h-screen'>
      < Background />
      <div className='flex items-center justify-center w-full h-full'>
        <div className='bg-transparent max-w-[95vw] max-h-[95vh] md:max-w-[80vw] md:max-h-[90vh] w-full h-full flex items-center justify-center'>

          <SectionObserverProvider>
            <refractive.div
              className="relative mx-auto h-full w-full border border-white/20 bg-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] flex flex-col md:flex-row"
              refraction={{
                radius: 20,
                blur: 15,
                bezelWidth: 20,
                glassThickness: 75,
                refractiveIndex: 1.3
              }}
            >
              <Navbar isCollapsed={isCollapsed} toggleNavbar={toggleNavbar} />
              <Outlet />
            </refractive.div>
          </SectionObserverProvider>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
