import { Outlet } from "react-router-dom";
import Background from './Background/Background'
import Navbar from './Navbar/Navbar'

import { useNavbar } from '../context/NavbarContext';

const MainLayout = () => {
  const { isCollapsed, toggleNavbar } = useNavbar();
  return (
    <div className='relative w-screen h-screen'>
      <Background />
      <div className='flex items-center justify-center w-full h-full bg-white-100 bg-opacity-10'>
        <div className='bg-transparent max-w-[95vw] max-h-[95vh] md:max-w-[80vw] md:max-h-[90vh] w-full h-full flex items-center justify-center'>
          <div className="mx-auto h-full w-full border border-white-500 bg-white-500 bg-opacity-30 backdrop-blur-lg rounded-2xl
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