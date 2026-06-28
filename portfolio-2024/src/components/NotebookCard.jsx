import React from 'react';
import KaggleIcon from '../svg/kaggle.svg?react';
import StreamlitIcon from '../svg/streamlit.svg?react';
import TechnologyCard from './TechnologyCard';

const NotebookCard = ({ notebook }) => {
  return (
    <div 
      className="bg-white-500/10 border border-white-100 shadow-md hover:bg-white-500/40 hover:shadow-lg transition-all ease-in-out w-full h-full flex flex-col gap-2 p-2 py-3 items-start backdrop-blur-md rounded-lg"
    >
      <p className="notebook-title">{notebook?.title}</p>
      <p className="notebook-description">{notebook?.description}</p>
      <div className="flex gap-2 flex-wrap">{notebook?.technologies?.map((technology, index) => (
        <TechnologyCard key={index} technology={technology?.name} />
      ))}</div>
      <div className="flex gap-1 justify-end w-full mt-auto">
        {notebook?.kaggle && (
          <a href={notebook.kaggle} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            <KaggleIcon className="linkIcon-special" />
          </a>
        )}
        {notebook?.streamlit && (
          <a href={notebook.streamlit} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            <StreamlitIcon className="linkIcon-special" />
          </a>
        )}
      </div>
    </div>
  );
}

export default NotebookCard;
