import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Closing, Letter, Passcode, Question, Recap, Timer, Message, Music, Picture } from './components';
import MusicProvider from './components/MusicProvider';
import './index.css';

// Layout component for pages with persistent music
function MusicLayout() {
  return (
    <MusicProvider>
      <Outlet /> {/* nested pages will render here */}
    </MusicProvider>
  );
}

function App() {
  return (
    <Routes>
      {/* Pages before the timer */}
      <Route path="/" element={<Passcode />} />
      <Route path="/question" element={<Question />} />

      {/* All pages after the timer */}
      <Route element={<MusicLayout />}>
        <Route path="/timer" element={<Timer />} />
        <Route path="/recap" element={<Recap />} />
        <Route path="/recap/message" element={<Message />} />
        <Route path="/recap/music" element={<Music />} />
        <Route path="/recap/pictures" element={<Picture />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/closing" element={<Closing />} />
      </Route>
    </Routes>
  );
}

export default App;
