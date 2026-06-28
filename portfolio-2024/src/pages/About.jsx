import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import AboutSection from '../sections/About';
import { useNavbar } from '../context/NavbarContext';

const About = () => {
  const { isCollapsed } = useNavbar();
  const navigate = useNavigate();
  return (
    <div className={`h-full w-full overflow-y-auto scrollbar-thin scrollbar-webkit md:mt-0 mt-4 px-4 py-5 ${isCollapsed ? 'opacity-100' : 'md:opacity-100 opacity-10'}`}>
      <div className={`flex flex-col items-start justify-start ${isCollapsed ? 'lg:w-[80%] mx-auto' : 'w-full'}`}>
        <Button className="w-auto !mt-0 mb-4" text={"← Back to Home"} onClick={() => navigate('/')} />
        <AboutSection />
      </div>
    </div>
  );
};

export default About;
