import React from 'react';
import './LessonProgress.css';

const LessonProgress = ({ completed, total }) => {
  const progressPercentage = (completed / total) * 100;

  return (
    <div className="lesson-progress-container">
      <div className="lesson-progress">
        <h2>Your lesson progress</h2>
        <div className="progress-bar">
          <div className="progress" style={{width: `${progressPercentage}%`}}></div>
        </div>
        <span className="progress-text">{completed} / {total}</span>
      </div>
    </div>
  );
};

export default LessonProgress;
