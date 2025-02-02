const Home = () => {
  const skills = [
    { name: 'Python', icon: 'python' },
    { name: 'Tensorflow', icon: 'tensorflow' },
    { name: 'PyTorch', icon: 'pytorch' },
    { name: 'Scikit-learn', icon: 'scikit-learn' },
    { name: 'Pandas', icon: 'pandas' },
    { name: 'Numpy', icon: 'numpy' },
    { name: 'Matplotlib', icon: 'matplotlib' },
    { name: 'Seaborn', icon: 'seaborn' },
  ]

  const projects = [
    { name: 'Image Classification', description: 'Classifying images using Convolutional Neural Networks' },
    { name: 'Object Detection', description: 'Detecting objects in images using YOLOv5' },
    { name: 'Sentiment Analysis', description: 'Analyzing sentiment of text data using BERT' },
  ]

  return (
    <div className="h-full w-full px-10 py-5 flex flex-col items-start justify-start overflow-y-auto">
      <h1 className='header-2'>About me</h1>
      <p className='paragraph mt-2'>
        I am a Machine Learning Engineer with a passion for creating and deploying models that solve real-world problems.
        <br />
        I have experience in building and deploying machine learning models for various applications such as image classification, object detection, and natural language processing.      </p>

      {/* skill grid  */}
      <h1 className='header-2 mt-5'>Skills</h1>
      <div className="grid grid-cols-8 gap-2 mt-2">
        {skills.map((skill, index) =>
        (
          <div key={index} className="p-2 flex flex-col justify-center items-center align-bottom rounded-md bg-white-500 bg-opacity-25 border border-white-100 shadow-md
    hover:bg-white-500  hover:bg-opacity-60 hover:shadow-lg transition-all ease-in-out">
            {/* <img src={`./icons/${skill.icon}.svg`} alt={skill.name} className="skill-icon" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
              <circle cx="18" cy="17.5" r="17.5" fill="#D9D9D9" />
            </svg>
            <p className="skill-text">{skill.name}</p>
          </div>
        )
        )}
      </div>

      {/* Recent Work */}
      <h1 className='header-2 mt-5'>Recent Work</h1>
      <div className="grid grid-cols-3 gap-5 mt-2">
        {projects.map((project, index) =>
          <div key={index} className="w-full
          bg-white-500 bg-opacity-25 rounded-md border border-white-100 shadow-md
          hover:bg-white-500  hover:bg-opacity-60 hover:shadow-lg transition-all ease-in-out">
            <div className="h-52 bg-white-500 bg-opacity-50 rounded-t-md"></div>
            <div className="p-2">
              <h1 className="header-3">{project.name}</h1>
              <p className="paragraph">{project.description}</p>
            </div>
            <div className='w-full flex justify-evenly p-2'>
              <button>view demo</button>
              <button>view code</button>
            </div>
          </div>
        )
        }
      </div >
    </div >

  );
}

export default Home;