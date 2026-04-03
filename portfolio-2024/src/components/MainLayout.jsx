import { Outlet } from "react-router-dom";
import Background from './Background/Background'
import Navbar from './Navbar/Navbar'

import { useNavbar } from '../context/NavbarContext';
import { SectionObserverProvider } from '../context/SectionObserverContext';

const MainLayout = () => {
  const { isCollapsed, toggleNavbar } = useNavbar();
  return (
    <div className='relative w-screen h-screen'>
      {/* <div className='absolute bg-black-900 h-screen w-screen'></div> */}
      < Background />
      <div className='flex items-center justify-center w-full h-full bg-white-100/10'>
        <div className='bg-transparent max-w-[95vw] max-h-[95vh] md:max-w-[80vw] md:max-h-[90vh] w-full h-full flex items-center justify-center'>

          <SectionObserverProvider>
            <div className="relative mx-auto h-full w-full rounded-xl
              border border-white-200 bg-white/30 backdrop-blur-xl 
              shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
              after:content-[''] after:absolute after:inset-0 after:rounded-2xl
              after:bg-white/10 after:opacity-30 after:blur-xl after:pointer-events-none
              flex flex-col md:flex-row">
              <Navbar isCollapsed={isCollapsed} toggleNavbar={toggleNavbar} />
              <Outlet />
            </div>
          </SectionObserverProvider>
        </div>
      </div>
    </div>
  );
}


export default MainLayout;
