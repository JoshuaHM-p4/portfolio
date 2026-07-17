import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SkillCard from './SkillCard';

const SkillsMarquee = ({ skills }) => {
  const trackRef = useRef(null);
  const doubled = [...skills, ...skills];

  useGSAP(() => {
    const track = trackRef.current;
    if (!track) return;

    const timer = setTimeout(() => {
      const setWidth = track.scrollWidth / 2;
      gsap.to(track, {
        x: -setWidth,
        duration: setWidth / 50,
        ease: 'none',
        repeat: -1,
      });
    }, 350);

    return () => clearTimeout(timer);
  }, { scope: trackRef, dependencies: [skills] });

  return (
    <div
      className="w-full overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <div ref={trackRef} className="flex gap-2 w-max">
        {doubled.map((skill, index) => (
          <div key={index} className="w-24 shrink-0">
            <SkillCard skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;
