


// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/Home'; // Import the Home page from components
// import Login from './components/Login';
// import AdminDashboard from './components/AdminDashboard';
// import CandidateDashboard from './components/CandidateDashboard';
// import VoterDashboard from './components/VoterDashboard';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} /> {/* Set Home as default route */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//         <Route path="/candidate" element={<CandidateDashboard />} />
//         <Route path="/voter" element={<VoterDashboard />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import Login from './components/Login';
// import AdminDashboard from './components/AdminDashboard';
// import CandidateDashboard from './components/CandidateDashboard';
// import VoterDashboard from './components/VoterDashboard';
// import AboutUs from './components/AboutUs';

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} /> {/* Home page as default route */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//         <Route path="/candidate" element={<CandidateDashboard />} />
//         <Route path="/voter" element={<VoterDashboard />} />
//         <Route path="/aboutus" element={<AboutUs />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;



// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import Login from './components/Login';
// import AdminDashboard from './components/AdminDashboard';
// import CandidateDashboard from './components/CandidateDashboard';
// import VoterDashboard from './components/VoterDashboard';
// import AboutUs from './components/AboutUs';
// import ResultsDashboard from './components/ResultsDashboard';  // Import ResultsDashboard

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} /> {/* Home page as default route */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//         <Route path="/candidate" element={<CandidateDashboard />} />
//         <Route path="/voter" element={<VoterDashboard />} />
//         <Route path="/aboutus" element={<AboutUs />} />
//         <Route path="/results" element={<ResultsDashboard />} /> {/* Add the Results Dashboard Route */}
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;



// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';  // Import SignUp component
import AdminDashboard from './components/AdminDashboard';
import CandidateDashboard from './components/CandidateDashboard';
import VoterDashboard from './components/VoterDashboard';
import AboutUs from './components/AboutUs';
import ResultsDashboard from './components/ResultsDashboard';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> {/* Add signup route */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/candidate" element={<CandidateDashboard />} />
        <Route path="/voter" element={<VoterDashboard />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/results" element={<ResultsDashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
