import React from 'react';
import Navbar from "./Navbar/Navbar";
import Background from "./Background/Background";
import PageTransition from "./PageTransition";
import { useNavbar } from '../context/NavbarContext';
import { SectionObserverProvider } from '../context/SectionObserverContext';
import { refractive } from "@hashintel/refractive";

const supportsRefractiveBackdrop = () =>
  typeof window !== 'undefined' &&
  typeof window.CSS !== 'undefined' &&
  window.CSS.supports?.('backdrop-filter', 'url(#x)');

const MainLayout = () => {
  const { isCollapsed, toggleNavbar } = useNavbar();
  const [canRefract] = React.useState(supportsRefractiveBackdrop);

  const panelClass =
    "relative mx-auto h-full w-full border border-white/20 bg-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] flex flex-col md:flex-row";

  return (
    <div className='relative w-screen h-screen'>
      < Background />
      <div className='flex items-center justify-center w-full h-full'>
        <div className='bg-transparent max-w-[95vw] max-h-[95vh] md:max-w-[80vw] md:max-h-[90vh] w-full h-full flex items-center justify-center'>

          <SectionObserverProvider>
            {canRefract ? (
              <refractive.div
                className={panelClass}
                refraction={{
                  radius: 20,
                  blur: 15,
                  bezelWidth: 20,
                  glassThickness: 75,
                  refractiveIndex: 1.3
                }}
              >
                <Navbar isCollapsed={isCollapsed} toggleNavbar={toggleNavbar} />
                <PageTransition />
              </refractive.div>
            ) : (
              <div
                className={`${panelClass} rounded-[20px] backdrop-blur-md`}
              >
                <Navbar isCollapsed={isCollapsed} toggleNavbar={toggleNavbar} />
                <PageTransition />
              </div>
            )}
          </SectionObserverProvider>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
