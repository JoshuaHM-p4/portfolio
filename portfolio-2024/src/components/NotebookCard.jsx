import React from 'react';
import KaggleIcon from '../svg/kaggle.svg?react';
import StreamlitIcon from '../svg/streamlit.svg?react';

const NotebookCard = ({ notebook }) => {
  return (
    <div 
      className="bg-white-500/10 border border-white-100 shadow-md w-full flex flex-col gap-2 p-2 py-3 items-start backdrop-blur-md rounded-lg"
    >
      <p className="notebook-title">{notebook?.title}</p>
      <div className="flex gap-2 flex-wrap">{notebook?.technologies?.map((technology, index) => (
        <p key={index} className="font-texturina text-[0.625rem] font-medium text-center text-blue-500 bg-blue-100/20 border border-white-100 rounded px-2 py-1">{technology?.name}</p>
      ))}</div>
      <p className="notebook-description">{notebook?.description}</p>
      <div className="flex gap-1 justify-end w-full">
        <a href={notebook?.kaggle} target="_blank" rel="noopener noreferrer">
          <KaggleIcon className="linkIcon-special" />
        </a>
        <a href={notebook?.streamlit} target="_blank" rel="noopener noreferrer">
          <StreamlitIcon className="linkIcon-special" />
        </a>
      </div>
    </div>
  );
}

export default NotebookCard;
