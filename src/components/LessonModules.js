import React from 'react';
import LessonCard from './LessonCard';

const LessonModules = () => {
  return (
    <div className="lesson-modules">
      <h2>Getting Started</h2>
      <div className="lesson-grid">
        <LessonCard 
          title="Welcome to FedEx Office"
          description="Lorem ipsum dolor sit amet consect. Tempor tristique tempor."
          completed={true}
        />
        <LessonCard 
          title="Intro to FUSE"
          description="Vulputate semper velit ornare arcu cursus vitae aliquet. Id lacus tristique."
          completed={true}
        />
        <LessonCard 
          title="Navigating Around"
          description="Elit ut lectus ornare amet purus mi maecenas dolor neque nunc mattis."
          completed={true}
        />
        <LessonCard 
          title="Core Resources"
          description="Massa facilisis sit posuere diam risus sociis aliquet. Dignissim in tincidunt."
        />
      </div>

      <h2>Shipping</h2>
      <div className="lesson-grid">
        <LessonCard 
          title="Intro to Shipping"
          description="Faucibus sit sit magna feugiat. Orci lectus hac tempor tempor morbi hac."
        />
        <LessonCard 
          title="Shipment Creation"
          description="Velit blandit ac vitae nec at libero. Auctor phasellus rhoncus nec mattis."
        />
        <LessonCard 
          title="Domestic Shipping"
          description="Description for Domestic Shipping."
        />
        <LessonCard 
          title="International Shipping"
          description="Description for International Shipping."
        />
      </div>
    </div>
  );
};

export default LessonModules;