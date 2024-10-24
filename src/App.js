import React from 'react';
// import './index.css';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import SearchInput from './components/SearchInput';
import LessonProgress from './components/LessonProgress';
import LessonModules from './components/LessonModules';
import ChatAssistant from './components/ChatAssistant';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-container">
        <TopBar />
        <main className="content-wrapper">
          <div className="main-content">
            {/* <SearchInput /> */}
            <LessonModules />
          </div>
          <ChatAssistant />
        </main>
      </div>
    </div>
  );
}

export default App;