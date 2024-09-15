import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Pages/Home';
import CalculatorPage from './Pages/Calculator';
import ClockPage from './Pages/Clock';
import TimerPage from './Pages/Timer';
import FetchDataPage from './Pages/FetchData';
import GetFetchFromBtnPage from './Pages/GetFetchFromBtnn'; 


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/calculator">Calculator</Link></li>
            <li><Link to="/clock">Clock</Link></li>
            <li><Link to="/timer">Timer</Link></li>
            <li><Link to="/fetchData">FetchData</Link></li>
            <li><Link to="/getFetchFromBtn">GetFetchFromBtn</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/clock" element={<ClockPage />} />
          <Route path="/timer" element={<TimerPage />} />
          <Route path="/fetchData" element={<FetchDataPage />} />
          <Route path="/getFetchFromBtn" element={<GetFetchFromBtnPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
