import { useNavigate, useParams } from 'react-router-dom';
import educations from '../data/education.json';
import Button from '../components/Button';
import { useNavbar } from '../context/NavbarContext';
import TechnologyCard from '../components/TechnologyCard';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const EducationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isCollapsed } = useNavbar();
  const education = educations.find((e) => String(e.id) === String(id));

  useGSAP(() => {
    gsap.fromTo('.gsap-mask-text',
      { y: '100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
    );
  }, [education]);

  if (!education) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center gap-2">
        <h1 className="header-2">Education not found</h1>
        <Button className="w-auto" text={"← Back to Experience"} onClick={() => navigate('/experience')} />
      </div>
    );
  }

  return (
    <div className={`h-full w-full overflow-y-auto scrollbar-thin scrollbar-webkit md:mt-0 mt-4 px-4 py-5 ${isCollapsed ? 'opacity-100' : 'md:opacity-100 opacity-10'}`}>
      <div className={`flex flex-col items-start ${isCollapsed ? 'lg:w-[80%] mx-auto' : 'w-full'}`}>
        <Button className="w-auto !mt-0 mb-4" text={"← Experience & Education"} onClick={() => navigate('/experience')} />

        <p className="date">{education.date}</p>
        <h1 className="header-2 text-start mt-1">{education.title}</h1>
        <h2 className="header-3 text-start mb-4 text-blue-400">{education.institution}</h2>

        <div className="flex flex-col gap-3 mt-2">
          {education.longDescription?.map((desc, i) => (
            <div key={i} className="overflow-hidden">
              <p className="paragraph text-justify gsap-mask-text">{desc}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap mt-6">
          {education.technologies?.map((t, i) => (
            <TechnologyCard key={i} technology={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationDetail;
