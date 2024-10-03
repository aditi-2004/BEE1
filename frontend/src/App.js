// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './components/Login';
// import AdminDashboard from './components/AdminDashboard';
// import CandidateDashboard from './components/CandidateDashboard';
// import VoterDashboard from './components/VoterDashboard';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//         <Route path="/candidate" element={<CandidateDashboard />} />
//         <Route path="/voter" element={<VoterDashboard />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import CandidateDashboard from './components/CandidateDashboard';
import VoterDashboard from './components/VoterDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/candidate" element={<CandidateDashboard />} />
        <Route path="/voter" element={<VoterDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
