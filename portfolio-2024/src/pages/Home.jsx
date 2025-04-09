import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import SkillCard from '../components/SkillCard';
import PictureCard from '../components/PictureCard';
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
    { name: 'Image Classification', description: 'Classifying images using Convolutional Neural Networks', img: 'img/yolo.png', codeLink: 'https://example.com', demoLink: 'https://example.com' },
    { name: 'Text Classification', description: 'Classifying text data using LSTM', img: 'img/circuit.png', codeLink: 'https://example.com', demoLink: 'https://example.com' },
    { name: 'Image Generation', description: 'Generating images using GANs', img: 'img/yolo.png', codeLink: 'https://example.com', demoLink: 'https://example.com' },
    { name: 'Object Detection', description: 'Detecting objects in images using YOLO', img: 'img/yolo.png', codeLink: 'https://example.com', demoLink: 'https://example.com' },
  ]

  return (
    <div className={`h-full w-full overflow-y-auto md:mt-0 mt-4 px-4 py-5 ${isCollapsed ? 'opacity-100 flex flex-row' : 'md:opacity-100 opacity-10'}`}>
      <div
        className={`flex flex-col items-start justify-start transition-all duration-300 overflow-x-hidden lg:overflow-visible
        ${isCollapsed ? "lg:w-[80%]  mx-auto" : "w-full"}`}
      >
        <div className='w-full md:flex flex-row h-fit items-start md:gap-5'>
          {/* Personal Picture Card */}
          {isCollapsed &&
            <PictureCard image={"./img/profile.jpg"} title={"Joshua Mistal"} description={"ML Specialization"} />
          }

          {/* Profile Heading */}
          <div>
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
            <Button className="w-auto" text={"Let's Chat"} onClick={() => { }} />
          </div>
        </div>


        {/* skill grid  */}
        <h1 className='header-3 mt-5'>Skills</h1>
        <div className="grid lg:grid-cols-8 md:grid-cols-5 grid-cols-3 gap-2 mt-2">
          {skills.map((skill, index) =>
          (
            <SkillCard key={index} skill={skill} />
          )
          )}
        </div>

        {/* Recent Work */}
        <h1 className='header-3 mt-5'>Recent Work</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-2">
          {projects.map((project, index) =>
            <ProjectCard key={index} project={project} />
          )}
        </div >


      </div >
    </div>
  );
}

export default Home;