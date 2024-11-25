// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li><Link to="/admin">Admin Dashboard</Link></li>
//         <li><Link to="/candidate">Candidate Dashboard</Link></li>
//         <li><Link to="/voter">Voter Dashboard</Link></li>
//         <li><Link to="/login">Login</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">ELECTIFY</h1>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
