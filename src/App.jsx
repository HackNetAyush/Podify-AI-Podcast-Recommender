import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PodcastRecommender from './PodcastRecommender';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<PodcastRecommender />} />
      </Routes>
    </Router>
  );
}

export default App;
