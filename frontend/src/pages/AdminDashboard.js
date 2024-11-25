
// // src/pages/AdminDashboard.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const AdminDashboard = () => {
//   const [candidates, setCandidates] = useState([]);
//   const [voters, setVoters] = useState([]);
//   const [newCandidate, setNewCandidate] = useState({ name: '', facilities: '', experience: '', manifesto: '', education: '' });
//   const [newVoter, setNewVoter] = useState({ name: '', email: '' });

//   useEffect(() => {
//     fetchCandidates();
//     fetchVoters();
//   }, []);

//   // Fetch candidates
//   const fetchCandidates = async () => {
//     try {
//       const res = await axios.get('/api/candidates', {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       });
//       setCandidates(res.data);
//     } catch (err) {
//       console.error('Error fetching candidates', err);
//     }
//   };

//   // Fetch voters
//   const fetchVoters = async () => {
//     try {
//       const res = await axios.get('/api/voters', {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       });
//       setVoters(res.data);
//     } catch (err) {
//       console.error('Error fetching voters', err);
//     }
//   };

//   // Delete candidate
//   const handleDeleteCandidate = async (id) => {
//     try {
//       await axios.delete(`/api/candidates/${id}`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       });
//       fetchCandidates();
//     } catch (err) {
//       console.error('Error deleting candidate', err);
//     }
//   };

//   // Delete voter
//   const handleDeleteVoter = async (id) => {
//     try {
//       await axios.delete(`/api/voters/${id}`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       });
//       fetchVoters();
//     } catch (err) {
//       console.error('Error deleting voter', err);
//     }
//   };

//   // Add new candidate
//   const handleAddCandidate = async () => {
//     try {
//       await axios.post('/api/candidates', newCandidate, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       });
//       fetchCandidates();
//       setNewCandidate({ name: '', facilities: '', experience: '', manifesto: '', education: '' });
//     } catch (err) {
//       console.error('Error adding candidate', err);
//     }
//   };

//   // Add new voter
//   const handleAddVoter = async () => {
//     try {
//       await axios.post('/api/voters', newVoter, {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       });
//       fetchVoters();
//       setNewVoter({ name: '', email: '' });
//     } catch (err) {
//       console.error('Error adding voter', err);
//     }
//   };

//   // Chart data
//   const chartData = {
//     labels: candidates.map(candidate => candidate.name),
//     datasets: [
//       {
//         label: 'Votes',
//         data: candidates.map(candidate => candidate.votes || 0),
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       }
//     ],
//   };

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       <div>
//         <h2>Candidates</h2>
//         <ul>
//           {candidates.map(candidate => (
//             <li key={candidate._id}>
//               {candidate.name} - {candidate.votes || 0} votes
//               <button onClick={() => handleDeleteCandidate(candidate._id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h2>Voters</h2>
//         <ul>
//           {voters.map(voter => (
//             <li key={voter._id}>
//               {voter.name} - {voter.email}
//               <button onClick={() => handleDeleteVoter(voter._id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
//     </div>
//   );
// };

// export default AdminDashboard;


// // src/pages/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [voters, setVoters] = useState([]);

  useEffect(() => {
    fetchCandidates();
    fetchVoters();
  }, []);

  // Fetch candidates from backend
  const fetchCandidates = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/candidates', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setCandidates(res.data);
    } catch (err) {
      console.error('Error fetching candidates', err);
    }
  };

  // Fetch voters from backend
  const fetchVoters = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/voters', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setVoters(res.data);
    } catch (err) {
      console.error('Error fetching voters', err);
    }
  };

  // Chart data for visualizing votes
  const chartData = {
    labels: candidates.map(candidate => candidate.name),
    datasets: [
      {
        label: 'Votes',
        data: candidates.map(candidate => candidate.votes || 0),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      }
    ],
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <h2>Candidates</h2>
      <ul>
        {candidates.map(candidate => (
          <li key={candidate._id}>
            {candidate.name} - {candidate.votes || 0} votes
          </li>
        ))}
      </ul>

      <h2>Voters</h2>
      <ul>
        {voters.map(voter => (
          <li key={voter._id}>
            {voter.name || voter.email} - Voted: {voter.hasVoted ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>

      <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
    </div>
  );
};

export default AdminDashboard;
