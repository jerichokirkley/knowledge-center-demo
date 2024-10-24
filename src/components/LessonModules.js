import React, { useState, useEffect } from 'react';
import LessonCard from './LessonCard';
import LessonProgress from './LessonProgress';

const LessonModules = () => {
  const [lessons, setLessons] = useState([
    { id: 1, title: "Welcome to Enterprise", description: "Lorem ipsum dolor sit amet consect. Tempor tristique tempor.", timeEstimate: 5, completed: true },
    { id: 2, title: "Intro to Enterprise", description: "Vulputate semper velit ornare arcu cursus vitae aliquet. Id lacus tristique.", timeEstimate: 10, completed: true },
    { id: 3, title: "Navigating Around", description: "Elit ut lectus ornare amet purus mi maecenas dolor neque nunc mattis.", timeEstimate: 15, completed: true },
    { id: 4, title: "Core Resources", description: "Massa facilisis sit posuere diam risus sociis aliquet. Dignissim in tincidunt.", timeEstimate: 20, completed: false },
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
