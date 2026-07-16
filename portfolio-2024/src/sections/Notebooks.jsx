import { Link, useNavigate } from 'react-router-dom';
import NotebookCard from '../components/NotebookCard';
import SeeAllButton from '../components/SeeAllButton';
import { useNavbar } from '../context/NavbarContext';
import notebooksList from '../data/notebooks.json';

const Notebooks = () => {
  const { isCollapsed } = useNavbar();
  const navigate = useNavigate();

  return (
    <section id="notebooks" className="w-full mt-10 lg:mt-16 lg:min-h-[80vh] lg:flex lg:flex-col lg:justify-center">
      <h1 className={`header-3 gsap-animate-text ${isCollapsed ? 'md:text-center' : 'md:text-start'}`}>Recent Notebooks</h1>
      <div className="w-full grid gap-3 mt-2 grid-cols-[repeat(auto-fill,minmax(220px,1fr))] auto-cols-[220px]">
        {notebooksList.filter((n) => n.highlight).map((notebook, index) => (
          <div key={index} className="gsap-animate-up h-full">
            <Link to={`/notebooks/${notebook.id}`} className="block h-full hover:scale-[1.01] transition-transform">
              <NotebookCard notebook={notebook} />
            </Link>
          </div>
        ))}
      </div>
      <div className="gsap-animate-up">
        <SeeAllButton text="See All Notebooks" onClick={() => navigate('/notebooks')} />
      </div>
    </section>
  );
};

export default Notebooks;
