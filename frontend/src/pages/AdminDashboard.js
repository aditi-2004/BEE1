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
//     setNewCandidate({ name: '', facilities: '', experience: '', manifesto: '', education: '' });
//   };

//   const handleAddVoter = async () => {
//     await axios.post('/api/voters', newVoter);
//     setVoters([...voters, newVoter]);
//     setNewVoter({ name: '', email: '' });
//   };

//   // Prepare data for chart
//   const chartData = {
//     labels: candidates.map(candidate => candidate.name),
//     datasets: [
//       {
//         label: 'Votes',
//         data: candidates.map(candidate => candidate.votes),
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
      
//       <h2>Candidates</h2>
//       <ul>
//         {candidates.map(candidate => (
//           <li key={candidate._id}>
//             {candidate.name} - {candidate.votes} votes
//             <button onClick={() => handleDeleteCandidate(candidate._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
      
//       <h2>Add Candidate</h2>
//       <input type="text" placeholder="Name" value={newCandidate.name} onChange={(e) => setNewCandidate({ ...newCandidate, name: e.target.value })} />
//       <input type="text" placeholder="Facilities" value={newCandidate.facilities} onChange={(e) => setNewCandidate({ ...newCandidate, facilities: e.target.value })} />
//       <input type="text" placeholder="Experience" value={newCandidate.experience} onChange={(e) => setNewCandidate({ ...newCandidate, experience: e.target.value })} />
//       <input type="text" placeholder="Manifesto" value={newCandidate.manifesto} onChange={(e) => setNewCandidate({ ...newCandidate, manifesto: e.target.value })} />
//       <input type="text" placeholder="Education" value={newCandidate.education} onChange={(e) => setNewCandidate({ ...newCandidate, education: e.target.value })} />
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
//       <input type="text" placeholder="Name" value={newVoter.name} onChange={(e) => setNewVoter({ ...newVoter, name: e.target.value })} />
//       <input type="email" placeholder="Email" value={newVoter.email} onChange={(e) => setNewVoter({ ...newVoter, email: e.target.value })} />
//       <button onClick={handleAddVoter}>Add Voter</button>

//       <h2>Election Results</h2>
//       <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: 'top' }, tooltip: { callbacks: { label: (context) => `${context.label}: ${context.raw}` } } } }} />
//     </div>
//   );
// };

// export default AdminDashboard;






// src/pages/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [voters, setVoters] = useState([]);
  const [newCandidate, setNewCandidate] = useState({
    name: '',
    facilities: '',
    experience: '',
    manifesto: '',
    education: '',
  });
  const [newVoter, setNewVoter] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    fetchCandidates();
    fetchVoters();
  }, []);

  // Fetch candidates
  const fetchCandidates = async () => {
    try {
      const res = await axios.get('/api/candidates');
      setCandidates(res.data);
    } catch (err) {
      console.error('Error fetching candidates', err);
    }
  };

  // Fetch voters
  const fetchVoters = async () => {
    try {
      const res = await axios.get('/api/voters');
      setVoters(res.data);
    } catch (err) {
      console.error('Error fetching voters', err);
    }
  };

  // Delete candidate
  const handleDeleteCandidate = async (id) => {
    try {
      await axios.delete(`/api/candidates/${id}`);
      fetchCandidates(); // Fetch again to update the list
    } catch (err) {
      console.error('Error deleting candidate', err);
    }
  };

  // Delete voter
  const handleDeleteVoter = async (id) => {
    try {
      await axios.delete(`/api/voters/${id}`);
      fetchVoters(); // Fetch again to update the list
    } catch (err) {
      console.error('Error deleting voter', err);
    }
  };

  // Add new candidate
  const handleAddCandidate = async () => {
    try {
      if (
        !newCandidate.name ||
        !newCandidate.facilities ||
        !newCandidate.experience ||
        !newCandidate.manifesto ||
        !newCandidate.education
      ) {
        alert('Please fill out all fields for the candidate.');
        return;
      }
      await axios.post('/api/candidates', newCandidate);
      fetchCandidates(); // Fetch again to update the list
      setNewCandidate({ name: '', facilities: '', experience: '', manifesto: '', education: '' });
    } catch (err) {
      console.error('Error adding candidate', err);
    }
  };

  // Add new voter
  const handleAddVoter = async () => {
    try {
      if (!newVoter.name || !newVoter.email) {
        alert('Please provide name and email for the voter.');
        return;
      }
      await axios.post('/api/voters', newVoter);
      fetchVoters(); // Fetch again to update the list
      setNewVoter({ name: '', email: '' });
    } catch (err) {
      console.error('Error adding voter', err);
    }
  };

  // Prepare data for chart
  const chartData = {
    labels: candidates.map((candidate) => candidate.name),
    datasets: [
      {
        label: 'Votes',
        data: candidates.map((candidate) => candidate.votes || 0), // Ensure that if votes are missing, we show 0
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <h2>Candidates</h2>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate._id}>
            {candidate.name} - {candidate.votes || 0} votes
            <button onClick={() => handleDeleteCandidate(candidate._id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Add Candidate</h2>
      <input
        type="text"
        placeholder="Name"
        value={newCandidate.name}
        onChange={(e) => setNewCandidate({ ...newCandidate, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Facilities"
        value={newCandidate.facilities}
        onChange={(e) => setNewCandidate({ ...newCandidate, facilities: e.target.value })}
      />
      <input
        type="text"
        placeholder="Experience"
        value={newCandidate.experience}
        onChange={(e) => setNewCandidate({ ...newCandidate, experience: e.target.value })}
      />
      <input
        type="text"
        placeholder="Manifesto"
        value={newCandidate.manifesto}
        onChange={(e) => setNewCandidate({ ...newCandidate, manifesto: e.target.value })}
      />
      <input
        type="text"
        placeholder="Education"
        value={newCandidate.education}
        onChange={(e) => setNewCandidate({ ...newCandidate, education: e.target.value })}
      />
      <button onClick={handleAddCandidate}>Add Candidate</button>

      <h2>Voters</h2>
      <ul>
        {voters.map((voter) => (
          <li key={voter._id}>
            {voter.name} - {voter.email}
            <button onClick={() => handleDeleteVoter(voter._id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Add Voter</h2>
      <input
        type="text"
        placeholder="Name"
        value={newVoter.name}
        onChange={(e) => setNewVoter({ ...newVoter, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newVoter.email}
        onChange={(e) => setNewVoter({ ...newVoter, email: e.target.value })}
      />
      <button onClick={handleAddVoter}>Add Voter</button>

      <h2>Election Results</h2>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: { position: 'top' },
            tooltip: {
              callbacks: {
                label: (context) => `${context.label}: ${context.raw} votes`,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default AdminDashboard;

