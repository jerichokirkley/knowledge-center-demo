import React from 'react';
import './LessonCard.css';

const LessonCard = ({ id, title, description, timeEstimate, completed, onToggleCompletion }) => {
  return (
    <div 
      className={`lesson-card ${completed ? 'completed' : ''}`}
      onClick={() => onToggleCompletion(id)}
    >
      <div className="card-header">
        <div className={`check-icon ${completed ? 'completed' : 'disabled'}`}>
          ✓
        </div>
        {!completed && <div className="time-estimate">{timeEstimate} min</div>}
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default LessonCard;
