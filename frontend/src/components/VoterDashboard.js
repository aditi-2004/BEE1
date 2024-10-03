// // src/components/VoterDashboard.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const VoterDashboard = () => {
//   const [candidates, setCandidates] = useState([]);
//   const [selectedCandidate, setSelectedCandidate] = useState('');
//   const [voteSubmitted, setVoteSubmitted] = useState(false);

//   useEffect(() => {
//     const fetchCandidates = async () => {
//       const res = await axios.get('/api/candidates');
//       setCandidates(res.data);
//     };
//     fetchCandidates();
//   }, []);

//   const handleVote = async () => {
//     await axios.post('/api/votes', { candidateId: selectedCandidate });
//     setVoteSubmitted(true);  // Vote submitted successfully
//   };

//   return (
//     <div>
//       <h1>Voter Dashboard</h1>
//       <h2>Select a Candidate to Vote</h2>
//       {voteSubmitted ? (
//         <p>Thank you for voting!</p>
//       ) : (
//         <ul>
//           {candidates.map(candidate => (
//             <li key={candidate._id}>
//               <label>
//                 <input 
//                   type="radio" 
//                   name="candidate" 
//                   value={candidate._id} 
//                   onChange={(e) => setSelectedCandidate(e.target.value)} 
//                 />
//                 {candidate.name} - {candidate.facility}
//               </label>
//             </li>
//           ))}
//         </ul>
//       )}
//       <button onClick={handleVote} disabled={!selectedCandidate || voteSubmitted}>
//         Vote
//       </button>
//     </div>
//   );
// };

// export default VoterDashboard;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const VoterDashboard = () => {
//   const [candidates, setCandidates] = useState([]);
//   const [selectedCandidate, setSelectedCandidate] = useState('');
//   const [voteSubmitted, setVoteSubmitted] = useState(false);

//   useEffect(() => {
//     const fetchCandidates = async () => {
//       try {
//         const res = await axios.get('/api/candidates');
//         setCandidates(res.data);
//       } catch (error) {
//         console.error('Error fetching candidates:', error);
//       }
//     };
//     fetchCandidates();
//   }, []);

//   const handleVote = async () => {
//     try {
//       await axios.post('/api/votes', { voterId: 'YOUR_VOTER_ID', candidateId: selectedCandidate }); // Replace 'YOUR_VOTER_ID' with actual ID
//       setVoteSubmitted(true);
//     } catch (error) {
//       console.error('Error casting vote:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Voter Dashboard</h1>
//       <h2>Select a Candidate to Vote</h2>
//       {voteSubmitted ? (
//         <p>Thank you for voting!</p>
//       ) : (
//         <ul>
//           {candidates.map(candidate => (
//             <li key={candidate._id}>
//               <label>
//                 <input type="radio" name="candidate" value={candidate._id} onChange={(e) => setSelectedCandidate(e.target.value)} />
//                 {candidate.name} - {candidate.facilities}
//               </label>
//             </li>
//           ))}
//         </ul>
//       )}
//       <button onClick={handleVote} disabled={!selectedCandidate || voteSubmitted}>Vote</button>
//     </div>
//   );
// };

// export default VoterDashboard;



// src/components/VoterDashboard.js




import React, { useEffect, useState } from 'react';

const VoterDashboard = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('/api/vote/candidates', {
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
      }
    };

    fetchCandidates();
  }, []);

  const handleVote = async (candidateId) => {
    try {
      const token = localStorage.getItem('token');
      const voterId = 'YOUR_VOTER_ID'; // Replace with actual voter ID
      const response = await fetch('/api/vote/vote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ voterId, candidateId })
      });

      if (!response.ok) {
        throw new Error('Failed to cast vote');
      }

      alert('Vote cast successfully');
    } catch (error) {
      console.error('Error casting vote:', error);
    }
  };

  return (
    <div>
      <h2>Voter Dashboard</h2>
      {candidates.map(candidate => (
        <div key={candidate._id} className="candidate-card">
          <h3>{candidate.name}</h3>
          <p>{candidate.facilities}</p>
          <p>{candidate.experience}</p>
          <p>{candidate.manifesto}</p>
          <p>{candidate.education}</p>
          <button onClick={() => handleVote(candidate._id)}>Vote</button>
        </div>
      ))}
    </div>
  );
};

export default VoterDashboard;
