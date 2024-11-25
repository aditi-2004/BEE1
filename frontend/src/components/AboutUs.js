// // src/components/AboutUs.js

import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Us</h1>
        <p>
          This voting system allows secure and transparent voting for all participants, ensuring fairness and easy access for voters, candidates, and administrators.
        </p>
      </div>

      {/* Team Section (Optional: you can update it with team members) */}
      <div className="team-section">
        <div className="team-member">
          {/* <img src="team-member-image.jpg" alt="Team Member" /> */}
          <h3>Abhishek Dhiman</h3>
          {/* <p>Lead Developer</p> */}
        </div>
        <div className="team-member">
          {/* <img src="team-member-image.jpg" alt="Team Member" /> */}
          <h3>Aditi Goel</h3>
          {/* <p>UI/UX Designer</p> */}
        </div>
        <div className="team-member">
          {/* <img src="team-member-image.jpg" alt="Team Member" /> */}
          <h3>Aditi Gupta</h3>
          {/* <p>UI/UX Designer</p> */}
        </div>
        <div className="team-member">
          {/* <img src="team-member-image.jpg" alt="Team Member" /> */}
          <h3>Akashdeep Pal</h3>
          {/* <p>UI/UX Designer</p> */}
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          To provide a fair, transparent, and secure platform for democratic voting where every voice is heard and counted.
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info-section">
        <h3>Contact Us</h3>
        <p>Email: support@votingsystem.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
    </div>
  );
};

export default AboutUs;
