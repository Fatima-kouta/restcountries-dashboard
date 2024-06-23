import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import CountryDetailPage from './Pages/CountryDetailPage';

function App() {

  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home/> }/>
        <Route exact path="/country/:name" element={<CountryDetailPage/> }/>
        </Routes>
  </Router>
  );
}

export default App;
