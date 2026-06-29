import { useRef } from 'react';
import gsap from 'gsap';

const GSAPHoverCard = ({ children, className = "" }) => {
  const comp = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(comp.current, {
      scale: 1.02,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(comp.current, {
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 0.1)", // Default tailwind bg-white-500/10
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)", // Default shadow-md
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <div
      ref={comp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`bg-white-500/10 border border-white-100 shadow-md backdrop-blur-md rounded-lg ${className}`}
    >
      {children}
    </div>
  );
};

export default GSAPHoverCard;
