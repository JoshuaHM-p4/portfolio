const Home = () => {
  const skills = [
    { name: 'python', icon: 'python' },
    { name: 'tensorflow', icon: 'tensorflow' },
    { name: 'pyTorch', icon: 'pytorch' },
    { name: 'skLearn', icon: 'scikitlearn' },
    { name: 'pandas', icon: 'pandas' },
    { name: 'numpy', icon: 'numpy' },
    { name: 'matplotlib', icon: 'matplotlib' },
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
            <img src={`./icons/${skill.icon}.svg`} alt={skill.name} className="w-12" />
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