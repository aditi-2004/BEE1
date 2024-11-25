

// // src/components/AdminDashboard.js
// import React, { useEffect, useState } from 'react';

// const AdminDashboard = () => {
//   const [candidates, setCandidates] = useState([]);
//   const [voters, setVoters] = useState([]);
  
//   useEffect(() => {
//     const fetchCandidates = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch('/api/candidates', {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });
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
//         const data = await response.json();
//         setVoters(data);
//       } catch (error) {
//         console.error('Error fetching voters:', error);
//       }
//     };

//     fetchCandidates();
//     fetchVoters();
//   }, []);

//   return (
//     <div>
//       <h1>Admin Dashboard</h1>

//       <h2>Candidates</h2>
//       <ul>
//         {candidates.map(candidate => (
//           <li key={candidate._id}>
//             {candidate.name} - {candidate.facilities} - {candidate.experience} - {candidate.manifesto} - {candidate.education} - Votes: {candidate.votes}
//           </li>
//         ))}
//       </ul>

//       <h2>Voters</h2>
//       <ul>
//         {voters.map(voter => (
//           <li key={voter._id}>
//             {voter.name} - {voter.email} - Voted: {voter.hasVoted ? 'Yes' : 'No'}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminDashboard;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Bar } from 'react-chartjs-2';  // Assuming you use Chart.js for bar chart
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const AdminDashboard = () => {
//   const [candidates, setCandidates] = useState([]);
//   const [voters, setVoters] = useState([]);

//   useEffect(() => {
//     fetchCandidates();
//     fetchVoters();
//   }, []);

//   // Fetch candidates from backend
//   const fetchCandidates = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/candidates', {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       });
//       setCandidates(res.data);
//     } catch (err) {
//       console.error('Error fetching candidates', err);
//     }
//   };

//   // Fetch voters from backend
//   const fetchVoters = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/voters', {
//         headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
//       });
//       setVoters(res.data);
//     } catch (err) {
//       console.error('Error fetching voters', err);
//     }
//   };

//   // Chart data for visualizing votes
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

//       <h2>Candidates</h2>
//       <ul>
//         {candidates.map(candidate => (
//           <li key={candidate._id}>
//             {candidate.name} - {candidate.votes || 0} votes
//           </li>
//         ))}
//       </ul>

//       <h2>Voters</h2>
//       <ul>
//         {voters.map(voter => (
//           <li key={voter._id}>
//             {voter.name || voter.email} - Voted: {voter.hasVoted ? 'Yes' : 'No'}
//           </li>
//         ))}
//       </ul>

//       {/* Bar Chart for votes */}
//       <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
//     </div>
//   );
// };

// export default AdminDashboard;


// //line charts
// import React, { useEffect, useState } from 'react';
// import './AdminDashboard.css';
// import { Bar, Line } from 'react-chartjs-2'; // Import Chart.js charts
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// // Register necessary chart components
// ChartJS.register(
//   CategoryScale, 
//   LinearScale, 
//   BarElement, 
//   LineElement, 
//   PointElement, // Register PointElement for Line charts
//   Title, 
//   Tooltip, 
//   Legend
// );

// const AdminDashboard = () => {
//   const [candidates, setCandidates] = useState([]);
//   const [voters, setVoters] = useState([]);

//   // Fetch candidates and voters on component load
//   const fetchCandidates = async () => {
//     const token = localStorage.getItem('token');
//     try {
//       const response = await fetch('http://localhost:5000/api/candidates', {
//         method: 'GET',
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await response.json();
//       setCandidates(data);
//     } catch (error) {
//       console.error('Error fetching candidates:', error);
//     }
//   };

//   const fetchVoters = async () => {
//     const token = localStorage.getItem('token');
//     try {
//       const response = await fetch('http://localhost:5000/api/voters', {
//         method: 'GET',
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const data = await response.json();
//       setVoters(data);
//     } catch (error) {
//       console.error('Error fetching voters:', error);
//     }
//   };

//   useEffect(() => {
//     fetchCandidates();
//     fetchVoters();
//   }, []);

//   // Chart data for votes (Bar Chart)
//   const barChartData = {
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

//   // Line chart data for voter participation
//   const lineChartData = {
//     labels: voters.map(voter => voter.email),
//     datasets: [
//       {
//         label: 'Voter Participation',
//         data: voters.map(voter => (voter.hasVoted ? 1 : 0)), // 1 for voted, 0 for not voted
//         fill: false,
//         borderColor: 'rgba(75, 192, 192, 1)',
//         tension: 0.1,
//       }
//     ],
//   };

//   return (
//     <div className="admin-dashboard">
//       <h2>Admin Dashboard</h2>

//       <div className="section">
//         <h3>Candidates</h3>
//         {candidates.length > 0 ? (
//           candidates.map((candidate, index) => (
//             <div key={index} className="candidate-card">
//               <h4>{candidate.name}</h4>
//               <p><strong>Facilities:</strong> {candidate.facilities}</p>
//               <p><strong>Experience:</strong> {candidate.experience}</p>
//               <p><strong>Manifesto:</strong> {candidate.manifesto}</p>
//               <p><strong>Education:</strong> {candidate.education}</p>
//             </div>
//           ))
//         ) : (
//           <p>No candidates available</p>
//         )}
//       </div>

//       <div className="section">
//         <h3>Voters</h3>
//         {voters.length > 0 ? (
//           voters.map((voter, index) => (
//             <div key={index} className="voter-card">
//               <h4>{voter.email}</h4>
//               <p><strong>Role:</strong> {voter.role}</p>
//             </div>
//           ))
//         ) : (
//           <p>No voters available</p>
//         )}
//       </div>

//       {/* Bar Chart for Votes */}
//       <div className="chart-container">
//         <h3>Votes Distribution</h3>
//         <Bar data={barChartData} options={{ responsive: true }} />
//       </div>

//       {/* Line Chart for Voter Participation */}
//       <div className="chart-container">
//         <h3>Voter Participation</h3>
//         <Line data={lineChartData} options={{ responsive: true }} />
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';
import { Bar, Line } from 'react-chartjs-2'; // Import Chart.js charts
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary chart components
ChartJS.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  LineElement, 
  PointElement, // Register PointElement for Line charts
  Title, 
  Tooltip, 
  Legend
);

const AdminDashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [voters, setVoters] = useState([]);

  // Fetch candidates and voters on component load
  const fetchCandidates = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://localhost:5000/api/candidates', {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setCandidates(data);
    } catch (error) {
      console.error('Error fetching candidates:', error);
    }
  };

  const fetchVoters = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://localhost:5000/api/voters', {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setVoters(data);
    } catch (error) {
      console.error('Error fetching voters:', error);
    }
  };

  useEffect(() => {
    fetchCandidates();
    fetchVoters();
  }, []);

  // Chart data for votes (Bar Chart)
  const barChartData = {
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

  // //Line chart data for voter participation
  // const lineChartData = {
  //   labels: voters.map(voter => voter.email),
  //   datasets: [
  //     {
  //       label: 'Voter Participation',
  //       data: voters.map(voter => (voter.hasVoted ? 1 : 0)), // 1 for voted, 0 for not voted
  //       fill: false,
  //       borderColor: 'rgba(75, 192, 192, 1)',
  //       tension: 0.1,
  //     }
  //   ],
  // };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      {/* Candidates Section */}
      <div className="section">
        <h3>Candidates</h3>
        {candidates.length > 0 ? (
          candidates.map((candidate, index) => (
            <div key={index} className="candidate-card">
              <h4>{candidate.name}</h4>
              <p><strong>Facilities:</strong> {candidate.facilities}</p>
              <p><strong>Experience:</strong> {candidate.experience}</p>
              <p><strong>Manifesto:</strong> {candidate.manifesto}</p>
              <p><strong>Education:</strong> {candidate.education}</p>
              <p><strong>Votes:</strong> {candidate.votes || 0} votes</p> {/* Display vote count */}
            </div>
          ))
        ) : (
          <p>No candidates available</p>
        )}
      </div>

      {/* Voters Section */}
      <div className="section">
        <h3>Voters</h3>
        {voters.length > 0 ? (
          voters.map((voter, index) => (
            <div key={index} className="voter-card">
              <h4>{voter.email}</h4>
              <p><strong>Role:</strong> {voter.role}</p>
              <p><strong>Voted:</strong> {voter.hasVoted ? 'Yes' : 'No'}</p>
            </div>
          ))
        ) : (
          <p>No voters available</p>
        )}
      </div>

      {/* Bar Chart for Votes */}
      <div className="chart-container">
        <h3>Votes Distribution</h3>
        <Bar data={barChartData} options={{ responsive: true }} />
      </div>

      {/* Line Chart for Voter Participation
      <div className="chart-container">
        <h3>Voter Participation</h3>
        <Line data={lineChartData} options={{ responsive: true }} />
      </div> */}
    </div>
  );
};

export default AdminDashboard;
