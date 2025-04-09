import Button from '../components/Button';
import { useNavbar } from '../context/NavbarContext';

const Home = () => {
  const { isCollapsed } = useNavbar();

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
    <div className="h-full w-full overflow-y-auto px-4 py-5">
      <div
        className={`flex flex-col items-start justify-start transition-all duration-300
        ${isCollapsed ? "w-[80%] mx-auto" : "w-full"}`}
      >


        <div className='w-full flex h-fit items-start gap-5'>
          {/* Personal Picture Card */}
          { isCollapsed &&
          <div className="w-[700px] h-[240px] rounded-xl bg-white-500 bg-opacity-25 border border-white-100 shadow-md
            hover:bg-white-500  hover:bg-opacity-60 hover:shadow-lg transition-all ease-in-out">
              {/* Image */}
          </div>
          }

          {/* Profile Heading */}
          <div className='flex-col'>
            <div className="flex w-full h-full justify-between my-1">
              {isCollapsed ? (
                <>
                  <h1 className='header-2 font-bold mb-2'>Joshua Mistal</h1>
                  <div className="flex">
                    <p className="nav-profile-link">LinkedIn</p>
                    <p className="nav-profile-link">Github</p>
                  </div>
                </>
              ) : (
                <h1 className='header-2 font-bold mb-2'>About Me</h1>
              )}
            </div>
            <p className="description italic font-normal">Manila, Ph</p>
            {/* About Me Description */}
            <p className='paragraph mt-2'>
              Computer Engineer with a focus on Machine Learning Specialization. I self-developed myself with experience adapted through organizational teams and software development, through technical expertise and active contributions to student developer communities, and knowledge-sharing efforts, and finding ways to bring real-world impact.
            </p>
            {/* Button */}
            <Button text={"Let's Chat"} onClick={() => { }} />
          </div>
        </div>


        {/* skill grid  */}
        <h1 className='header-3 mt-5'>Skills</h1>
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
        <h1 className='header-3 mt-5'>Recent Work</h1>
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
    </div>
  );
}

export default Home;