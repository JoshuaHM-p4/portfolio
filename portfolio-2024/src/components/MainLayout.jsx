import { Outlet } from "react-router-dom";
import Background from './Background/Background'
import Navbar from './Navbar/Navbar'

const MainLayout = () => {
  return (
    <div className='relative w-screen h-screen'>
      <Background />
      <div className='bg-transparent h-screen w-screen flex items-center justify-center py-10 px-2 md:py-10 md:px-28'>
        <div className="mx-auto h-full w-full border border-white-500 bg-white-500 bg-opacity-30 backdrop-blur-sm rounded-2xl
          flex flex-col items-center justify-center p-5
          md:justify-normal md:items-start md:flex-row">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;