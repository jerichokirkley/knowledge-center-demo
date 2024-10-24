import React, { useState, useEffect } from 'react';
import LessonCard from './LessonCard';
import LessonProgress from './LessonProgress';

const LessonModules = () => {
  const [lessons, setLessons] = useState([
    { id: 1, title: "Welcome to Enterprise", description: "Get an overview of the Enterprise platform, explore its key features, and set up your account for success.", timeEstimate: 5, completed: true },
    { id: 2, title: "Intro to Enterprise", description: "Learn the foundational concepts and navigation techniques that will help you work more efficiently within the Enterprise system.", timeEstimate: 10, completed: true },
    { id: 3, title: "Navigating Around", description: "Master the layout and navigation of the platform, so you can easily access the tools and resources you need.", timeEstimate: 15, completed: true },
    { id: 4, title: "Core Resources", description: "Explore the core resources available to help you maximize your productivity and troubleshoot common issues.", timeEstimate: 20, completed: false },
    { id: 5, title: "Intro to Shipping", description: "Faucibus sit sit magna feugiat. Orci lectus hac tempor tempor morbi hac.", timeEstimate: 10, completed: false },
    { id: 6, title: "Shipment Creation", description: "Velit blandit ac vitae nec at libero. Auctor phasellus rhoncus nec mattis.", timeEstimate: 15, completed: false },
    { id: 7, title: "Domestic Shipping", description: "Description for Domestic Shipping.", timeEstimate: 20, completed: false },
    { id: 8, title: "International Shipping", description: "Description for International Shipping.", timeEstimate: 25, completed: false },
  ]);

  const toggleLessonCompletion = (id) => {
    setLessons(lessons.map(lesson => 
      lesson.id === id ? { ...lesson, completed: !lesson.completed } : lesson
    ));
  };

  const completedLessons = lessons.filter(lesson => lesson.completed).length;
  const totalLessons = lessons.length;

  return (
    <div className="lesson-modules">
      <LessonProgress completed={completedLessons} total={totalLessons} />
      <h2>Getting Started</h2>
      <div className="lesson-grid">
        {lessons.slice(0, 4).map(lesson => (
          <LessonCard 
            key={lesson.id}
            {...lesson}
            onToggleCompletion={() => toggleLessonCompletion(lesson.id)}
          />
        ))}
      </div>
      <h2>Shipping</h2>
      <div className="lesson-grid">
        {lessons.slice(4).map(lesson => (
          <LessonCard 
            key={lesson.id}
            {...lesson}
            onToggleCompletion={() => toggleLessonCompletion(lesson.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default LessonModules;
