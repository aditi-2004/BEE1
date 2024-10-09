// // src/pages/VoterDashboard.js

// import React, { useEffect, useState } from 'react';

// const VoterDashboard = () => {
//   const [candidates, setCandidates] = useState([]);
//   const [selectedCandidate, setSelectedCandidate] = useState('');

//   useEffect(() => {
//     const loadCandidates = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/candidates');
//         const data = await response.json();
//         setCandidates(data);
//       } catch (error) {
//         console.error('Error loading candidates:', error);
//       }
//     };

//     loadCandidates();
//   }, []);

//   const handleVote = async () => {
//     try {
//       await fetch('http://localhost:5000/api/vote', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ candidateId: selectedCandidate })
//       });
//       alert('Vote submitted successfully');
//     } catch (error) {
//       console.error('Error submitting vote:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Voter Dashboard</h1>
//       <section>
//         <h2>Candidates</h2>
//         <ul>
//           {candidates.map(candidate => (
//             <li key={candidate.id}>
//               <div>
//                 <h3>{candidate.name}</h3>
//                 <p>{candidate.facilities}</p>
//                 <button onClick={() => setSelectedCandidate(candidate.id)}>Vote</button>
//               </div>
//             </li>
//           ))}
//         </ul>
//         <button onClick={handleVote}>Submit Vote</button>
//       </section>
//     </div>
//   );
// };

// export default VoterDashboard;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const VoterDashboard = () => {
//   const [candidates, setCandidates] = useState([]);
//   const [voterId, setVoterId] = useState(''); // Replace with actual voter ID, possibly from authentication context

//   useEffect(() => {
//     const fetchCandidates = async () => {
//       try {
//         const res = await axios.get('/api/vote/candidates');
//         setCandidates(res.data);
//       } catch (error) {
//         console.error('Error fetching candidates:', error);
//       }
//     };

//     fetchCandidates();
//   }, []);

//   const handleVote = async (candidateId) => {
//     try {
//       await axios.post('/api/vote/vote', { voterId, candidateId });
//       alert('Vote cast successfully');
//       // Optionally, update local state or refetch candidates
//     } catch (error) {
//       console.error('Error casting vote:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Voter Dashboard</h1>
//       <h2>Candidates</h2>
//       <div className="candidate-cards">
//         {candidates.map(candidate => (
//           <div key={candidate._id} className="candidate-card">
//             <h3>{candidate.name}</h3>
//             <p>Facilities: {candidate.facilities}</p>
//             <p>Experience: {candidate.experience}</p>
//             <p>Manifesto: {candidate.manifesto}</p>
//             <p>Education: {candidate.education}</p>
//             <p>Votes: {candidate.votes}</p>
//             <button onClick={() => handleVote(candidate._id)}>Vote</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VoterDashboard;

import React, { useEffect, useState } from 'react';

const VoterDashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidateId, setSelectedCandidateId] = useState('');

  useEffect(() => {
    // Fetch candidates from the backend
    const fetchCandidates = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('/api/candidates', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (response.ok) {
          setCandidates(data);
        } else {
          console.error('Error fetching candidates:', data.msg);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCandidates();
  }, []);

  const handleVote = async (candidateId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/vote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ candidateId }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Vote cast successfully!');
      } else {
        console.error('Error casting vote:', data.msg);
        alert('Failed to cast vote');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to cast vote');
    }
  };

  return (
    <div>
      <h1>Voter Dashboard</h1>
      <h2>Select a candidate to vote for:</h2>
      {candidates.length > 0 ? (
        candidates.map(candidate => (
          <div key={candidate._id}>
            <h3>{candidate.name}</h3>
            <p>Facilities: {candidate.facilities}</p>
            <p>Experience: {candidate.experience}</p>
            <p>Manifesto: {candidate.manifesto}</p>
            <p>Education: {candidate.education}</p>
            <button onClick={() => handleVote(candidate._id)}>Vote</button>
          </div>
        ))
      ) : (
        <p>No candidates available to vote for.</p>
      )}
    </div>
  );
};

export default VoterDashboard;
