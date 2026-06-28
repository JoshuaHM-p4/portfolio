import { Link, useNavigate } from 'react-router-dom';
import notebooks from '../data/notebooks.json';
import NotebookCard from '../components/NotebookCard';
import Button from '../components/Button';
import { useNavbar } from '../context/NavbarContext';

const Notebooks = () => {
  const { isCollapsed } = useNavbar();
  const navigate = useNavigate();
  return (
    <div className={`h-full w-full overflow-y-auto scrollbar-thin scrollbar-webkit md:mt-0 mt-4 px-4 py-5 ${isCollapsed ? 'opacity-100' : 'md:opacity-100 opacity-10'}`}>
      <div className={`flex flex-col items-start justify-start ${isCollapsed ? 'lg:w-[80%] mx-auto' : 'w-full'}`}>
        <Button className="w-auto !mt-0 mb-4" text={"← Back to Home"} onClick={() => navigate('/')} />
        <h1 className="header-2 mb-2">All Notebooks</h1>
        <div className="w-full grid gap-3 mt-2 grid-cols-[repeat(auto-fill,minmax(220px,1fr))] auto-cols-[220px]">
          {notebooks.map((notebook) => (
            <Link key={notebook.id} to={`/notebooks/${notebook.id}`} className="block h-full hover:scale-[1.01] transition-transform">
              <NotebookCard notebook={notebook} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notebooks;
