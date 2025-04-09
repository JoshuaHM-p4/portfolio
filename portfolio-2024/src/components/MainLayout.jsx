import { Outlet } from "react-router-dom";
import Background from './Background/Background'
import Navbar from './Navbar/Navbar'

import { useNavbar } from '../context/NavbarContext';

const MainLayout = () => {
  const { isCollapsed, toggleNavbar } = useNavbar();
  return (
    <div className='relative w-screen h-screen'>
      <Background />
      <div className='flex items-center justify-center w-full h-full'>
        <div className='bg-transparent max-w-[90vw] max-h-[85vh] w-full h-full flex items-center justify-center'>
          <div className="mx-auto h-full w-full border border-white-500 bg-white-500 bg-opacity-30 backdrop-blur-sm rounded-2xl
            flex flex-col items-center justify-center p-5
            md:flex-row">
            <Navbar isCollapsed={isCollapsed} toggleNavbar={toggleNavbar}/>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;