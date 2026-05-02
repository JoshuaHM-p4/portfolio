import { useNavigate, useParams } from 'react-router-dom';
import notebooks from '../data/notebooks.json';
import Button from '../components/Button';
import { useNavbar } from '../context/NavbarContext';
import KaggleIcon from '../svg/kaggle.svg?react';
import StreamlitIcon from '../svg/streamlit.svg?react';
import HuggingFaceIcon from '../svg/huggingface.svg?react';

const IconLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-3 py-2 mt-2 border border-white-100 bg-white-500/10 hover:bg-white-500/40 backdrop-blur-sm rounded-md transition-all ease-in-out"
  >
    <Icon className="w-5 h-5 text-purple-500 fill-current stroke-current" />
    <span className="font-texturina text-sm font-medium text-purple-500">{label}</span>
  </a>
);

const NotebookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isCollapsed } = useNavbar();
  const notebook = notebooks.find((n) => String(n.id) === String(id));

  if (!notebook) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center gap-2">
        <h1 className="header-2">Notebook not found</h1>
        <Button className="rounded-md w-auto" text={"← Back to All Notebooks"} onClick={() => navigate('/notebooks')} />
      </div>
    );
  }

  return (
    <div className={`h-full w-full overflow-y-auto scrollbar-thin scrollbar-webkit md:mt-0 mt-4 px-4 py-5 ${isCollapsed ? 'opacity-100' : 'md:opacity-100 opacity-10'}`}>
      <div className={`flex flex-col items-start ${isCollapsed ? 'lg:w-[80%] mx-auto' : 'w-full'}`}>
        <Button className="rounded-md w-auto !mt-0 mb-4" text={"← All Notebooks"} onClick={() => navigate('/notebooks')} />

        <h1 className="header-2 text-start">{notebook.title}</h1>
        <p className="paragraph mt-3">{notebook.description}</p>

        <div className="flex gap-2 flex-wrap mt-4">
          {notebook.technologies?.map((t, i) => (
            <span key={i} className="font-texturina text-[0.7rem] font-medium text-blue-500 bg-blue-100/20 border border-white-100 rounded px-2 py-1">{t.name}</span>
          ))}
        </div>

        <div className="flex gap-3 flex-wrap">
          {notebook.kaggle && <IconLink href={notebook.kaggle} icon={KaggleIcon} label="View in Kaggle" />}
          {notebook.huggingface && <IconLink href={notebook.huggingface} icon={HuggingFaceIcon} label="View in HuggingFace" />}
          {notebook.streamlit && <IconLink href={notebook.streamlit} icon={StreamlitIcon} label="View in Streamlit" />}
        </div>
      </div>
    </div>
  );
};

export default NotebookDetail;
