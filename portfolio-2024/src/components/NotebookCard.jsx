import KaggleIcon from '../svg/kaggle.svg?react';
import GithubIcon from '../svg/github.svg?react';
import StreamlitIcon from '../svg/streamlit.svg?react';

const NotebookCard = ({ notebook }) => {
  return (
    <div className="bg-white-500 bg-opacity-25 rounded-md border border-white-100 shadow-md
      w-full flex flex-col gap-2 p-2 py-3 items-start">
      <p className="notebook-title">{notebook?.title}</p>
      <div className="flex gap-2 flex-wrap">{notebook?.technologies?.map((technology, index) => (
        <img src={`./icons/${technology?.icon}.svg`} alt={technology?.name} className="w-5" />
      ))}
      </div>
      <p className="notebook-description">{notebook?.description}</p>
      <div className="flex-1 items-end flex gap-2 w-full">
        {notebook?.links?.map((link, index) => (
          <a key={index} className="flex gap-2" href={link?.url} target="_blank" rel="noopener noreferrer">
            {link?.icon === "kaggle" ? (
              <KaggleIcon className="linkIcon-special" />
            ) : link?.icon === "streamlit" ? (
              <StreamlitIcon className="linkIcon-special" />
            ) : link?.icon === "github" ? (
              <GithubIcon className="linkIcon-special" />
            ) : null}
            <p className="description text-xs text-purple-500">View in {link?.label}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
export default NotebookCard;
