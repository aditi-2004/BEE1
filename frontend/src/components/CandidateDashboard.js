// // src/components/CandidateDashboard.js
// import React, { useState } from 'react';
// import axios from 'axios';

// const CandidateDashboard = () => {
//   const [name, setName] = useState('');
//   const [facility, setFacility] = useState('');
//   const [experience, setExperience] = useState(''); // Candidate's experience
//   const [manifesto, setManifesto] = useState(''); // Candidate's election manifesto
//   const [education, setEducation] = useState(''); // Candidate's education

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newCandidate = { name, facility, experience, manifesto, education };
//     await axios.post('/api/candidates', newCandidate);
//     // Optionally, reset the form or show a success message
//     setName('');
//     setFacility('');
//     setExperience('');
//     setManifesto('');
//     setEducation('');
//   };

//   return (
//     <div>
//       <h1>Candidate Dashboard</h1>
//       <form onSubmit={handleSubmit}>
//         {/* Name Input */}
//         <div>
//           <label>Name:</label>
//           <input 
//             type="text" 
//             placeholder="Your Name" 
//             value={name} 
//             onChange={(e) => setName(e.target.value)} 
//             required 
//           />
//         </div>

//         {/* Facilities Input */}
//         <div>
//           <label>Facilities:</label>
//           <input 
//             type="text" 
//             placeholder="Facilities you provide" 
//             value={facility} 
//             onChange={(e) => setFacility(e.target.value)} 
//             required 
//           />
//         </div>

//         {/* Experience Input */}
//         <div>
//           <label>Experience:</label>
//           <input 
//             type="text" 
//             placeholder="Your experience in public service" 
//             value={experience} 
//             onChange={(e) => setExperience(e.target.value)} 
//             required 
//           />
//         </div>

//         {/* Manifesto Input */}
//         <div>
//           <label>Election Manifesto:</label>
//           <textarea
//             placeholder="Write your election manifesto"
//             value={manifesto}
//             onChange={(e) => setManifesto(e.target.value)}
//             required
//           />
//         </div>

//         {/* Education Input */}
//         <div>
//           <label>Education:</label>
//           <input 
//             type="text" 
//             placeholder="Your highest qualification" 
//             value={education} 
//             onChange={(e) => setEducation(e.target.value)} 
//             required 
//           />
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CandidateDashboard;



// import React, { useState } from 'react';
// import axios from 'axios';

// const CandidateDashboard = () => {
//   const [name, setName] = useState('');
//   const [facility, setFacility] = useState('');
//   const [experience, setExperience] = useState('');
//   const [manifesto, setManifesto] = useState('');
//   const [education, setEducation] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newCandidate = { name, facilities: facility, experience, manifesto, education };
//     try {
//       await axios.post('/api/candidates', newCandidate);
//       setName('');
//       setFacility('');
//       setExperience('');
//       setManifesto('');
//       setEducation('');
//       alert('Candidate added successfully');
//     } catch (error) {
//       console.error('Error adding candidate:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Candidate Dashboard</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
//         </div>
//         <div>
//           <label>Facilities:</label>
//           <input type="text" placeholder="Facilities you provide" value={facility} onChange={(e) => setFacility(e.target.value)} required />
//         </div>
//         <div>
//           <label>Experience:</label>
//           <input type="text" placeholder="Your experience in public service" value={experience} onChange={(e) => setExperience(e.target.value)} required />
//         </div>
//         <div>
//           <label>Election Manifesto:</label>
//           <textarea placeholder="Write your election manifesto" value={manifesto} onChange={(e) => setManifesto(e.target.value)} required />
//         </div>
//         <div>
//           <label>Education:</label>
//           <input type="text" placeholder="Your highest qualification" value={education} onChange={(e) => setEducation(e.target.value)} required />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CandidateDashboard;


// // src/components/CandidateDashboard.js
// import React, { useState } from 'react';

// const CandidateDashboard = () => {
//   const [candidate, setCandidate] = useState({
//     name: '',
//     facilities: '',
//     experience: '',
//     manifesto: '',
//     education: ''
//   });

//   const handleChange = (e) => {
//     setCandidate({ ...candidate, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch('/api/candidates', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify(candidate)
//       });

//       if (!response.ok) {
//         throw new Error('Failed to add candidate');
//       }

//       alert('Candidate added successfully');
//       setCandidate({
//         name: '',
//         facilities: '',
//         experience: '',
//         manifesto: '',
//         education: ''
//       });
//     } catch (error) {
//       console.error('Error adding candidate:', error);
//       alert('Failed to add candidate');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Add Candidate</h2>
//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         value={candidate.name}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="facilities"
//         placeholder="Facilities"
//         value={candidate.facilities}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="experience"
//         placeholder="Experience"
//         value={candidate.experience}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="manifesto"
//         placeholder="Manifesto"
//         value={candidate.manifesto}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="education"
//         placeholder="Education"
//         value={candidate.education}
//         onChange={handleChange}
//         required
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default CandidateDashboard;
// src/components/CandidateDashboard.js
import React, { useState, useEffect } from 'react';

const CandidateDashboard = () => {
  const [candidate, setCandidate] = useState({
    name: '',
    facilities: '',
    experience: '',
    manifesto: '',
    education: ''
  });

  const [candidates, setCandidates] = useState([]);

  // Function to fetch candidates
  const fetchCandidates = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/candidates', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch candidates');
      }

      const data = await response.json();
      setCandidates(data);
    } catch (error) {
      console.error('Error fetching candidates:', error);
      alert('Failed to load candidates');
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  const handleChange = (e) => {
    setCandidate({ ...candidate, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/candidates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(candidate)
      });

      if (!response.ok) {
        throw new Error('Failed to add candidate');
      }

      alert('Candidate added successfully');
      setCandidate({
        name: '',
        facilities: '',
        experience: '',
        manifesto: '',
        education: ''
      });
      
      // Fetch updated candidates after adding a new one
      fetchCandidates();
    } catch (error) {
      console.error('Error adding candidate:', error);
      alert('Failed to add candidate');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add Candidate</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={candidate.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="facilities"
          placeholder="Facilities"
          value={candidate.facilities}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="experience"
          placeholder="Experience"
          value={candidate.experience}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="manifesto"
          placeholder="Manifesto"
          value={candidate.manifesto}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="education"
          placeholder="Education"
          value={candidate.education}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>

      <h2>Candidates List</h2>
      <ul>
        {candidates.map((cand) => (
          <li key={cand._id}>
            {cand.name} - {cand.facilities} - {cand.experience} - {cand.manifesto} - {cand.education}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateDashboard;
