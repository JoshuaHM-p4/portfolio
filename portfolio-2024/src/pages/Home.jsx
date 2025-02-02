import Navbar from '../components/Navbar/Navbar';

// Home
// About Me
// Contacts
//



const Home = () => {


  return (
    <div className='bg-transparent h-screen w-screen flex items-center justify-center py-10 px-2 md:py-10 md:px-28'>
      <div className="mx-auto h-full w-full border border-white-500 bg-white-500 bg-opacity-30 rounded-3xl backdrop-blur-sm
          flex flex-col items-center justify-center p-2
          md:justify-normal md:items-start md:flex-row">
        <Navbar />
      </div>
    </div>
  );
}

export default Home;