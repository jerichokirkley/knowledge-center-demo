import React from 'react';
import './LessonCard.css';

const LessonCard = ({ title, description, completed }) => {
  return (
    <div className={`lesson-card ${completed ? 'completed' : ''}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      {completed && <div className="check-icon">✓</div>}
    </div>
  );
};

export default LessonCard;