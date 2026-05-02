import { useLocation, useOutlet } from 'react-router-dom';

const PageTransition = () => {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <div
      key={location.pathname}
      className="page-transition h-full w-full overflow-hidden"
    >
      {outlet}
    </div>
  );
};

export default PageTransition;
