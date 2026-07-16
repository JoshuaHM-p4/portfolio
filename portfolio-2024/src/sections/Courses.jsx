import { useNavigate } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import SeeAllButton from '../components/SeeAllButton';
import { useNavbar } from '../context/NavbarContext';
import courses from '../data/courses.json';

const Courses = () => {
  const { isCollapsed } = useNavbar();
  const navigate = useNavigate();

  return (
    <section id="courses" className="w-full mt-10 lg:mt-16 lg:min-h-[80vh] lg:flex lg:flex-col lg:justify-center">
      <h1 className={`header-3 gsap-animate-text ${isCollapsed ? 'md:text-center' : 'md:text-start'}`}>Courses & Certifications</h1>
      <div className="w-full grid gap-3 mt-2 grid-cols-[repeat(auto-fill,minmax(220px,1fr))] auto-cols-[220px]">
        {courses.slice(0, 4).map((course) => (
          <div key={course.id} className="gsap-animate-up h-full">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
      <div className="gsap-animate-up">
        <SeeAllButton text="See All Courses" onClick={() => navigate('/courses')} />
      </div>
    </section>
  );
};

export default Courses;
