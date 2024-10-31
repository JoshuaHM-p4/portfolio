import Navbar from '../components/Navbar/Navbar';

// Home
// About Me
// Contacts
// 

const DummyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
);

const Home = () => {
  const navItems = [

    { icon: <DummyIcon />, text: 'Interests' },
    { icon: <DummyIcon />, text: 'Experiences' },
    { icon: <DummyIcon />, text: 'Projects' }
  ];

  return (
    <div className='page'>
      <div className="glass-container">
        <Navbar navItems={navItems}/>
      </div>
    </div>
  );
}

export default Home;