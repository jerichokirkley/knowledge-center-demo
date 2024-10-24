import React from 'react';
import './LessonProgress.css';

const LessonProgress = () => {
  return (
    <div className="lesson-progress-container">
      <div className="lesson-progress">
        <h2>YOUR LESSON PROGRESS</h2>
        <div className="progress-bar">
          <div className="progress" style={{width: '12%'}}></div>
        </div>
        <span className="progress-text">3 / 25</span>
      </div>
    </div>
  );
};

export default LessonProgress;