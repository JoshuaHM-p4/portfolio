import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const SectionDots = ({ activeIndex, total, onSelect }) => {
  const dotRefs = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    dotRefs.current.forEach((dot, i) => {
      if (!dot) return;
      const isActive = i === activeIndex;
      const isHovered = i === hoveredIndex;
      gsap.to(dot, {
        width: 8,
        height: isActive ? 32 : isHovered ? 16 : 8,
        backgroundColor: isActive ? '#f94348' : isHovered ? 'rgba(254,253,248,0.7)' : 'rgba(254,253,248,0.35)',
        duration: 0.35,
        ease: 'power3.out',
        overwrite: 'auto'
      });
    });
  }, [activeIndex, hoveredIndex]);

  return (
    <div className="hidden lg:flex flex-col items-center gap-2 absolute right-3 top-1/2 -translate-y-1/2 z-40">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          ref={(el) => (dotRefs.current[i] = el)}
          onClick={() => onSelect(i)}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="rounded-full cursor-pointer"
          style={{ width: 8, height: 8 }}
          aria-label={`Go to section ${i + 1}`}
        />
      ))}
    </div>
  );
};

export default SectionDots;
