// // src/components/AdminDashboard.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AdminDashboard = () => {
//   const [candidates, setCandidates] = useState([]);
//   const [voters, setVoters] = useState([]);
//   const [newCandidate, setNewCandidate] = useState({ name: '', facility: '' });
//   const [newVoter, setNewVoter] = useState({ name: '', email: '' });

//   useEffect(() => {
//     const fetchCandidates = async () => {
//       const res = await axios.get('/api/candidates');
//       setCandidates(res.data);
//     };
    
//     const fetchVoters = async () => {
//       const res = await axios.get('/api/voters');
//       setVoters(res.data);
//     };

//     fetchCandidates();
//     fetchVoters();
//   }, []);

//   const handleDeleteCandidate = async (id) => {
//     await axios.delete(`/api/candidates/${id}`);
//     setCandidates(candidates.filter(candidate => candidate._id !== id));
//   };

//   const handleDeleteVoter = async (id) => {
//     await axios.delete(`/api/voters/${id}`);
//     setVoters(voters.filter(voter => voter._id !== id));
//   };

//   const handleAddCandidate = async () => {
//     await axios.post('/api/candidates', newCandidate);
//     setCandidates([...candidates, newCandidate]);
//     setNewCandidate({ name: '', facility: '' });
//   };

//   const handleAddVoter = async () => {
//     await axios.post('/api/voters', newVoter);
//     setVoters([...voters, newVoter]);
//     setNewVoter({ name: '', email: '' });
//   };

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
      
//       <h2>Candidates</h2>
//       <ul>
//         {candidates.map(candidate => (
//           <li key={candidate._id}>
//             {candidate.name} - {candidate.facility}
//             <button onClick={() => handleDeleteCandidate(candidate._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
      
//       <h2>Add Candidate</h2>
//       <input 
//         type="text" 
//         placeholder="Name" 
//         value={newCandidate.name} 
//         onChange={(e) => setNewCandidate({ ...newCandidate, name: e.target.value })} 
//       />
//       <input 
//         type="text" 
//         placeholder="Facility" 
//         value={newCandidate.facility} 
//         onChange={(e) => setNewCandidate({ ...newCandidate, facility: e.target.value })} 
//       />
//       <button onClick={handleAddCandidate}>Add Candidate</button>

//       <h2>Voters</h2>
//       <ul>
//         {voters.map(voter => (
//           <li key={voter._id}>
//             {voter.name} - {voter.email}
//             <button onClick={() => handleDeleteVoter(voter._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>

//       <h2>Add Voter</h2>
//       <input 
//         type="text" 
//         placeholder="Name" 
//         value={newVoter.name} 
//         onChange={(e) => setNewVoter({ ...newVoter, name: e.target.value })} 
//       />
//       <input 
//         type="email" 
//         placeholder="Email" 
//         value={newVoter.email} 
//         onChange={(e) => setNewVoter({ ...newVoter, email: e.target.value })} 
//       />
//       <button onClick={handleAddVoter}>Add Voter</button>
//     </div>
//   );
// };

// export default AdminDashboard;

// // src/components/AdminDashboard.js
// import React, { useEffect, useState } from 'react';
// import { Chart } from 'react-google-charts'; // Assuming you are using Google Charts

// const AdminDashboard = () => {
//   const [candidates, setCandidates] = useState([]);
//   const [voters, setVoters] = useState([]);
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const fetchCandidates = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch('/api/candidates', {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch candidates');
//         }

//         const data = await response.json();
//         setCandidates(data);
//       } catch (error) {
//         console.error('Error fetching candidates:', error);
//       }
//     };

//     const fetchVoters = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch('/api/voters', {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch voters');
//         }

//         const data = await response.json();
//         setVoters(data);
//       } catch (error) {
//         console.error('Error fetching voters:', error);
//       }
//     };

//     const fetchResults = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch('/api/results', {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch results');
//         }

//         const data = await response.json();
//         setResults(data);
//       } catch (error) {
//         console.error('Error fetching results:', error);
//       }
//     };

//     fetchCandidates();
//     fetchVoters();
//     fetchResults();
//   }, []);

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
      
//       <h2>Candidates</h2>
//       <ul>
//         {candidates.map(candidate => (
//           <li key={candidate._id}>
//             {candidate.name} - {candidate.facilities}
//             <button onClick={() => handleDeleteCandidate(candidate._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>

//       <h2>Voters</h2>
//       <ul>
//         {voters.map(voter => (
//           <li key={voter._id}>
//             {voter.name} - {voter.email}
//             <button onClick={() => handleDeleteVoter(voter._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>

//       <h2>Results</h2>
//       <Chart
//         chartType="PieChart"
//         data={[
//           ['Candidate', 'Votes'],
//           ...results.map(result => [result.name, result.votes])
//         ]}
//         width="100%"
//         height="400px"
//         legendToggle
//       />
//     </div>
//   );
// };

// export default AdminDashboard;


// src/components/AdminDashboard.js
import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [voters, setVoters] = useState([]);
  
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('/api/candidates', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        setCandidates(data);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    const fetchVoters = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('/api/voters', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        setVoters(data);
      } catch (error) {
        console.error('Error fetching voters:', error);
      }
    };

    fetchCandidates();
    fetchVoters();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <h2>Candidates</h2>
      <ul>
        {candidates.map(candidate => (
          <li key={candidate._id}>
            {candidate.name} - {candidate.facilities} - {candidate.experience} - {candidate.manifesto} - {candidate.education} - Votes: {candidate.votes}
          </li>
        ))}
      </ul>

      <h2>Voters</h2>
      <ul>
        {voters.map(voter => (
          <li key={voter._id}>
            {voter.name} - {voter.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
