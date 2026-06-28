import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const SummarySlider = ({ summaries }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % summaries.length;
    animateSwap(nextIndex);
  };

  const animateSwap = (nextIndex) => {
    if (!containerRef.current) return;
    gsap.to(containerRef.current, {
      opacity: 0,
      y: -10,
      duration: 0.3,
      onComplete: () => {
        setCurrentIndex(nextIndex);
        gsap.fromTo(containerRef.current, 
          { opacity: 0, y: 10 }, 
          { opacity: 1, y: 0, duration: 0.3 }
        );
      }
    });
  };

  return (
    <div 
      className="cursor-pointer bg-white-500/5 border border-white-100 rounded-lg p-4 my-4 hover:bg-white-500/10 transition-all shadow-md"
      onClick={handleNext}
    >
      <div ref={containerRef} className="text-sm italic">
        " {summaries[currentIndex]} "
      </div>
      <div className="flex gap-1 justify-center mt-3">
        {summaries.map((_, i) => (
          <div key={i} className={`h-1 w-4 rounded-full transition-all ${i === currentIndex ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]' : 'bg-white-500/30'}`} />
        ))}
      </div>
    </div>
  );
};

export default SummarySlider;
