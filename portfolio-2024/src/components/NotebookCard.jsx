import React from 'react';
import KaggleIcon from '../svg/kaggle.svg?react';
import StreamlitIcon from '../svg/streamlit.svg?react';
import TechnologyCard from './TechnologyCard';
import GSAPHoverCard from './GSAPHoverCard';

const NotebookCard = ({ notebook }) => {
  return (
    <GSAPHoverCard className="w-full h-full flex flex-col gap-2 p-2 py-3 items-start">
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
    </GSAPHoverCard>
  );
}

export default NotebookCard;
