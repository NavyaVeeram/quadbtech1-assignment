import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FetchAPI from './components/fetchApi';
import DetailsPage from './components/detailpage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes here */}
        <Route exact path="/" element={<FetchAPI />} />
        <Route exact path="/detailspage" element={<DetailsPage />} />
        {/* Add more routes if needed */}
      </Routes>
    </Router>
  );
};

export default App;
