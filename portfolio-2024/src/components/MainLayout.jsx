import { Outlet } from "react-router-dom";
import Background from './Background/Background'
import Navbar from './Navbar/Navbar'

import { useNavbar } from '../context/NavbarContext';
import { SectionObserverProvider } from '../context/SectionObserverContext';

const MainLayout = () => {
  const { isCollapsed, toggleNavbar } = useNavbar();
  return (
    <div className='relative w-screen h-screen'>
      <Background />
      <div className='flex items-center justify-center w-full h-full bg-white-100 bg-opacity-10'>
        <div className='bg-transparent max-w-[95vw] max-h-[95vh] md:max-w-[80vw] md:max-h-[90vh] w-full h-full flex items-center justify-center'>

          <SectionObserverProvider>
            <div className="mx-auto h-full w-full rounded-2xl
              bg-gradient-to-br from-white/20 via-white/10 to-transparent
              border border-white/20 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]
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
