

// src/components/CandidateDashboard.js
// import React, { useState, useEffect } from 'react';

// const CandidateDashboard = () => {
//   const [candidate, setCandidate] = useState({
//     name: '',
//     facilities: '',
//     experience: '',
//     manifesto: '',
//     education: ''
//   });

//   const [candidates, setCandidates] = useState([]);

//   // Function to fetch candidates
//   const fetchCandidates = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch('/api/candidates', {
//         headers: {
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch candidates');
//       }

//       const data = await response.json();
//       setCandidates(data);
//     } catch (error) {
//       console.error('Error fetching candidates:', error);
//       alert('Failed to load candidates');
//     }
//   };

//   useEffect(() => {
//     fetchCandidates();
//   }, []);

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
      
//       // Fetch updated candidates after adding a new one
//       fetchCandidates();
//     } catch (error) {
//       console.error('Error adding candidate:', error);
//       alert('Failed to add candidate');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h2>Add Candidate</h2>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={candidate.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="facilities"
//           placeholder="Facilities"
//           value={candidate.facilities}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="experience"
//           placeholder="Experience"
//           value={candidate.experience}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="manifesto"
//           placeholder="Manifesto"
//           value={candidate.manifesto}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="education"
//           placeholder="Education"
//           value={candidate.education}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>

//       <h2>Candidates List</h2>
//       <ul>
//         {candidates.map((cand) => (
//           <li key={cand._id}>
//             {cand.name} - {cand.facilities} - {cand.experience} - {cand.manifesto} - {cand.education}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CandidateDashboard;



// // src/components/CandidateDashboard.js
// import React, { useState, useEffect } from 'react';
// import './CandidateDashboard.css'; // For styles

// const CandidateDashboard = () => {
//   const [candidate, setCandidate] = useState({
//     name: '',
//     facilities: '',
//     experience: '',
//     manifesto: '',
//     education: '',
//   });

//   const [candidates, setCandidates] = useState([]);

//   const fetchCandidates = async () => {
//     const token = localStorage.getItem('token');
//     const response = await fetch('/api/candidates', {
//       headers: { 'Authorization': `Bearer ${token}` },
//     });
//     const data = await response.json();
//     setCandidates(data);
//   };

//   useEffect(() => {
//     fetchCandidates();
//   }, []);

//   const handleChange = (e) => {
//     setCandidate({ ...candidate, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');
//     await fetch('/api/candidates', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//       },
//       body: JSON.stringify(candidate),
//     });
//     alert('Candidate added successfully');
//     setCandidate({ name: '', facilities: '', experience: '', manifesto: '', education: '' });
//     fetchCandidates();
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit} className="candidate-form">
//         <h2>Candidate Dashboard</h2>
//         <label>Name:</label>
//         <input name="name" value={candidate.name} onChange={handleChange} required />
//         <label>Facilities:</label>
//         <input name="facilities" value={candidate.facilities} onChange={handleChange} required />
//         <label>Experience:</label>
//         <input name="experience" value={candidate.experience} onChange={handleChange} required />
//         <label>Manifesto:</label>
//         <input name="manifesto" value={candidate.manifesto} onChange={handleChange} required />
//         <label>Education:</label>
//         <input name="education" value={candidate.education} onChange={handleChange} required />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CandidateDashboard;

// // src/components/CandidateDashboard.js
// import React, { useState, useEffect } from 'react';
// import './CandidateDashboard.css'; // For styles

// const CandidateDashboard = () => {
//   const [candidate, setCandidate] = useState({
//     name: '',
//     facilities: '',
//     experience: '',
//     manifesto: '',
//     education: '',
//   });

//   const [candidates, setCandidates] = useState([]);

//   const fetchCandidates = async () => {
//     const token = localStorage.getItem('token');
//     const response = await fetch('http://localhost:5000/api/candidates', {
//       method : 'GET',
//       headers: { 'Authorization': `Bearer ${token}` },
//     });
//     const data = await response.json();
//     console.log(data);

//     setCandidates(data);
//   };

//   useEffect(() => {
//     fetchCandidates();
//   }, []);

//   const handleChange = (e) => {
//     setCandidate({ ...candidate, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');
//     await fetch('http://localhost:5000/api/candidates', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//       },
//       body: JSON.stringify(candidate),
//     });
//     alert('Candidate added successfully');
//     setCandidate({ name: '', facilities: '', experience: '', manifesto: '', education: '' });
//     fetchCandidates();
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit} className="candidate-form">
//         <h2>Candidate Dashboard</h2>
//         <label>Name:</label>
//         <input name="name" value={candidate.name} onChange={handleChange} required />
//         <label>Facilities:</label>
//         <input name="facilities" value={candidate.facilities} onChange={handleChange} required />
//         <label>Experience:</label>
//         <input name="experience" value={candidate.experience} onChange={handleChange} required />
//         <label>Manifesto:</label>
//         <input name="manifesto" value={candidate.manifesto} onChange={handleChange} required />
//         <label>Education:</label>
//         <input name="education" value={candidate.education} onChange={handleChange} required />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CandidateDashboard;



// // src/components/CandidateDashboard.js
// import React, { useState, useEffect } from 'react';
// import './CandidateDashboard.css'; // For styles

// const CandidateDashboard = () => {
//   const [candidate, setCandidate] = useState({
//     name: '',
//     facilities: '',
//     experience: '',
//     manifesto: '',
//     education: '',
//   });

//   const [candidates, setCandidates] = useState([]);

//   // Fetch candidates on component load
//   const fetchCandidates = async () => {
//     const token = localStorage.getItem('token');
//     try {
//       const response = await fetch('http://localhost:5000/api/candidates', {
//         method: 'GET',
//         headers: { 'Authorization': `Bearer ${token}` },
//       });
//       const data = await response.json();
//       setCandidates(data); // Set fetched candidates to display
//     } catch (error) {
//       console.error('Error fetching candidates:', error);
//     }
//   };

//   useEffect(() => {
//     fetchCandidates();
//   }, []);

//   // Handle form input change
//   const handleChange = (e) => {
//     setCandidate({ ...candidate, [e.target.name]: e.target.value });
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');
//     try {
//       await fetch('http://localhost:5000/api/candidates', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify(candidate),
//       });
//       alert('Candidate added successfully');
//       setCandidate({ name: '', facilities: '', experience: '', manifesto: '', education: '' });
//       fetchCandidates(); // Refresh candidate list
//     } catch (error) {
//       console.error('Error adding candidate:', error);
//     }
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit} className="candidate-form">
//         <h2>Candidate Dashboard</h2>
//         <label>Name:</label>
//         <input name="name" value={candidate.name} onChange={handleChange} required />
//         <label>Facilities:</label>
//         <input name="facilities" value={candidate.facilities} onChange={handleChange} required />
//         <label>Experience:</label>
//         <input name="experience" value={candidate.experience} onChange={handleChange} required />
//         <label>Manifesto:</label>
//         <input name="manifesto" value={candidate.manifesto} onChange={handleChange} required />
//         <label>Education:</label>
//         <input name="education" value={candidate.education} onChange={handleChange} required />
//         <button type="submit">Submit</button>
//       </form>

//       <div className="candidate-list">
//         <h2>All Candidates</h2>
//         {candidates.length > 0 ? (
//           candidates.map((candidate, index) => (
//             <div key={index} className="candidate-card">
//               <h3>{candidate.name}</h3>
//               <p>Facilities: {candidate.facilities}</p>
//               <p>Experience: {candidate.experience}</p>
//               <p>Manifesto: {candidate.manifesto}</p>
//               <p>Education: {candidate.education}</p>
//             </div>
//           ))
//         ) : (
//           <p>No candidates available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CandidateDashboard;


// src/components/CandidateDashboard.js
import React, { useState, useEffect } from 'react';
import './CandidateDashboard.css';

const CandidateDashboard = () => {
  const [candidate, setCandidate] = useState({
    name: '',
    facilities: '',
    experience: '',
    manifesto: '',
    education: '',
  });

  const [candidates, setCandidates] = useState([]);

  // Fetch candidates on component load
  const fetchCandidates = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://localhost:5000/api/candidates', {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setCandidates(data); // Set fetched candidates to display
    } catch (error) {
      console.error('Error fetching candidates:', error);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    setCandidate({ ...candidate, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await fetch('http://localhost:5000/api/candidates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(candidate),
      });
      alert('Candidate added successfully');
      setCandidate({ name: '', facilities: '', experience: '', manifesto: '', education: '' });
      fetchCandidates(); // Refresh candidate list
    } catch (error) {
      console.error('Error adding candidate:', error);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="candidate-form">
        <h2>Candidate Dashboard</h2>
        <label>Name:</label>
        <input name="name" value={candidate.name} onChange={handleChange} required />
        <label>Facilities:</label>
        <input name="facilities" value={candidate.facilities} onChange={handleChange} required />
        <label>Experience:</label>
        <input name="experience" value={candidate.experience} onChange={handleChange} required />
        <label>Manifesto:</label>
        <input name="manifesto" value={candidate.manifesto} onChange={handleChange} required />
        <label>Education:</label>
        <input name="education" value={candidate.education} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>

      <div className="candidate-list">
        <h2>All Candidates</h2>
        {candidates.length > 0 ? (
          candidates.map((candidate, index) => (
            <div key={index} className="candidate-card">
              <h3>{candidate.name}</h3>
              <p><strong>Facilities:</strong> {candidate.facilities}</p>
              <p><strong>Experience:</strong> {candidate.experience}</p>
              <p><strong>Manifesto:</strong> {candidate.manifesto}</p>
              <p><strong>Education:</strong> {candidate.education}</p>
            </div>
          ))
        ) : (
          <p>No candidates available</p>
        )}
      </div>
    </div>
  );
};

export default CandidateDashboard;
