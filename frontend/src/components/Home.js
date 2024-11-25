// // src/components/Home.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';
// import Footer from './Footer';

// const Home = () => {
//   return (
//     <>
//     <div className="home-container">
//       {/* Introductory Section */}
//       <section className="intro-section">
//         <h1>Welcome to the Voting System</h1>
//         <p>Our Voting System allows registered voters to cast votes for their preferred candidates in a transparent, secure, and efficient way. Each role in the system – Admin, Candidate, and Voter – has specific access to help maintain the integrity and functionality of the election process.</p>
//         <p>Explore the system, and cast your vote to make a difference!</p>
//       </section>

//       {/* Image Section */}
//       <section className="image-section">
//         <img src="path/to/voting-image1.jpg" alt="Voting System" className="home-image" />
//         <img src="path/to/voting-image2.jpg" alt="Vote Here" className="home-image" />
//       </section>

//       {/* Login Section */}
//       <section className="login-section">
//         <h2>Login to Access Your Dashboard</h2>
//         <p>Choose your role to access the respective dashboard.</p>
//         <div className="login-buttons">
//           <Link to="/login?role=admin" className="login-link">Admin Login</Link>
//           <Link to="/login?role=candidate" className="login-link">Candidate Login</Link>
//           <Link to="/login?role=voter" className="login-link">Voter Login</Link>
//         </div>
//       </section>
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default Home;



// // src/components/Home.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';

// const Home = () => {
//   return (
//     <div className="home-container">
//       <section className="intro-section">
//         <h1>Welcome to the Voting System</h1>
//         <p>Our Voting System allows registered voters to cast votes for their preferred candidates in a transparent, secure, and efficient way.</p>
//         <p>Explore the system and cast your vote to make a difference!</p>
//       </section>

//       <section className="login-section">
//         <h2>Login to Access Your Dashboard</h2>
//         <div className="login-buttons">
//           <Link to="/login?role=admin" className="login-link">Admin Login</Link>
//           <Link to="/login?role=candidate" className="login-link">Candidate Login</Link>
//           <Link to="/login?role=voter" className="login-link">Voter Login</Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;




// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="intro-section">
        <h1>Welcome to the Voting System</h1>
        <p>Our Voting System allows registered voters to cast votes for their preferred candidates in a transparent, secure, and efficient way.</p>
        <p>Explore the system and cast your vote to make a difference!</p>
      </section>

      <section className="login-section">
        <h2>Login to Access Your Dashboard</h2>
        <div className="login-buttons">
          <Link to="/login?role=admin" className="login-link">Admin Login</Link>
          <Link to="/login?role=candidate" className="login-link">Candidate Login</Link>
          <Link to="/login?role=voter" className="login-link">Voter Login</Link>
          <Link to="/results" className="login-link">Results Dashboard</Link> {/* New Link */}
        </div>
      </section>
    </div>
  );
};

export default Home;
