import React from 'react';
import GSAPHoverCard from './GSAPHoverCard';

const CourseCard = ({ course }) => {
  return (
    <GSAPHoverCard className="w-full h-full flex flex-col gap-2 p-2 py-3 items-start overflow-hidden">
      <div className="w-full h-32 overflow-hidden rounded-md">
        <img src={course?.img} alt={course?.title} className="w-full h-full object-cover" />
      </div>
      <p className="notebook-title">{course?.title}</p>
      <p className="description">{course?.issuer}</p>
      <p className="caption">{course?.date}</p>
      <div className="flex gap-1 justify-end w-full mt-auto">
        {course?.pdf && (
          <a
            href={course.pdf}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 px-3 py-1 border border-white-100 bg-white-500/10 hover:bg-white-500/40 backdrop-blur-sm rounded-full transition-all ease-in-out"
          >
            <span className="font-texturina text-sm font-medium text-purple-500">View Certificate</span>
          </a>
        )}
      </div>
    </GSAPHoverCard>
  );
};

export default CourseCard;
