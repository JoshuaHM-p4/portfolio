import { useNavigate, useParams } from 'react-router-dom';
import experiences from '../data/experience.json';
import Button from '../components/Button';
import { useNavbar } from '../context/NavbarContext';
import TechnologyCard from '../components/TechnologyCard';

const ExperienceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isCollapsed } = useNavbar();
  const experience = experiences.find((e) => String(e.id) === String(id));

  if (!experience) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center gap-2">
        <h1 className="header-2">Experience not found</h1>
        <Button className="w-auto" text={"← Back to Experience"} onClick={() => navigate('/experience')} />
      </div>
    );
  }

  return (
    <div className={`h-full w-full overflow-y-auto scrollbar-thin scrollbar-webkit md:mt-0 mt-4 px-4 py-5 ${isCollapsed ? 'opacity-100' : 'md:opacity-100 opacity-10'}`}>
      <div className={`flex flex-col items-start ${isCollapsed ? 'lg:w-[80%] mx-auto' : 'w-full'}`}>
        <Button className="w-auto !mt-0 mb-4" text={"← Experience & Education"} onClick={() => navigate('/experience')} />

        <p className="date">{experience.date}</p>
        <h1 className="header-2 text-start mt-1">{experience.title}</h1>
        <h2 className="header-3 text-start mb-4 text-blue-400">{experience.company}</h2>

        <div className="flex flex-col gap-3 mt-2">
          {experience.longDescription?.map((desc, i) => (
            <p key={i} className="paragraph text-justify">{desc}</p>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap mt-6">
          {experience.technologies?.map((t, i) => (
            <TechnologyCard key={i} technology={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
