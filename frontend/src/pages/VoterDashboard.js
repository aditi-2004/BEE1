
// import React, { useEffect, useState } from 'react';
// const VoterDashboard = () => {
//   const [candidates, setCandidates] = useState([]);
//   const [selectedCandidateId, setSelectedCandidateId] = useState('');

//   useEffect(() => {
//     // Fetch candidates from the backend
//     const fetchCandidates = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch('/api/candidates', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`,
//           },
//         });

//         const data = await response.json();
//         if (response.ok) {
//           setCandidates(data);
//         } else {
//           console.error('Error fetching candidates:', data.msg);
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchCandidates();
//   }, []);

//   const handleVote = async (candidateId) => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch('/api/vote', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify({ candidateId }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert('Vote cast successfully!');
//       } else {
//         console.error('Error casting vote:', data.msg);
//         alert('Failed to cast vote');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Failed to cast vote');
//     }
//   };

//   return (
//     <div>
//       <h1>Voter Dashboard</h1>
//       <h2>Select a candidate to vote for:</h2>
//       {candidates.length > 0 ? (
//         candidates.map(candidate => (
//           <div key={candidate._id}>
//             <h3>{candidate.name}</h3>
//             <p>Facilities: {candidate.facilities}</p>
//             <p>Experience: {candidate.experience}</p>
//             <p>Manifesto: {candidate.manifesto}</p>
//             <p>Education: {candidate.education}</p>
//             <button onClick={() => handleVote(candidate._id)}>Vote</button>
//           </div>
//         ))
//       ) : (
//         <p>No candidates available to vote for.</p>
//       )}
//     </div>
//   );
// };
// export default VoterDashboard;


// //src/pages/VoterDashboard
// import React, { useEffect, useState } from 'react';
// import './VoterDashboard.css';

// const VoterDashboard = () => {
//   const [candidates, setCandidates] = useState([]);

//   // Fetch candidates from backend
//   useEffect(() => {
//     const fetchCandidates = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch('http://localhost:5000/api/candidates', {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) throw new Error('Failed to fetch candidates');

//         const data = await response.json();
//         setCandidates(data);
//       } catch (error) {
//         console.error('Error fetching candidates:', error);
//       }
//     };

//     fetchCandidates();
//   }, []);

//   // Vote for a candidate
//   const handleVote = async (voterId,candidateId) => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch('http://localhost:5000/api/vote/vote', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//           // 'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify({ voterId,candidateId }),
//       });

//       if (!response.ok) 
//         {throw new Error('Voting failed');}

//       alert('Vote cast successfully');
//       // Re-fetch candidates to update votes after voting
//       await fetchCandidates();
//     } catch (error) {
//       console.error('Error casting vote:', error);
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Voter Dashboard</h2>
//       <div className="candidates-list">
//         {candidates.length ? (
//           candidates.map((candidate) => (
//             <div key={candidate._id} className="candidate-card">
//               <h3>{candidate.name}</h3>
//               <p>Facilities: {candidate.facilities}</p>
//               <p>Experience: {candidate.experience}</p>
//               <p>Manifesto: {candidate.manifesto}</p>
//               <p>Education: {candidate.education}</p>
//               <button onClick={() => handleVote(candidate._id)}>Vote</button>
//             </div>
//           ))
//         ) : (
//           <p>No candidates available to vote for.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VoterDashboard;


// import React, { useEffect, useState } from 'react';
// import './VoterDashboard.css';

// const VoterDashboard = () => {
//   const [candidates, setCandidates] = useState([]);
//   const [voterId, setVoterId] = useState([]); // Replace with your dynamic voter ID source

//   useEffect(() => {
//     const fetchCandidates = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/candidates');
//         console.log(response.ok);
        
//         if (!response.ok) throw new Error('Failed to fetch candidates');
//         const data = await response.json();
//         setCandidates(data);
//       } catch (error) {
//         console.error('Error fetching candidates:', error);
//       }
//     };

//     fetchCandidates();
//   }, []);

//   const handleVote = async (candidateId) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/vote/vote', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ voterId, candidateId }),
//       });

//       if (!response.ok) throw new Error('Voting failed');
//       alert('Vote cast successfully');
//       fetchCandidates();
//     } catch (error) {
//       console.error('Error casting vote:', error);
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Voter Dashboard</h2>
//       <div className="candidates-list">
//         {candidates.length ? (
//           candidates.map((candidate) => (
//             <div key={candidate._id} className="candidate-card">
//               <h3>{candidate.name}</h3>
//               <p>Facilities: {candidate.facilities}</p>
//               <p>Experience: {candidate.experience}</p>
//               <p>Manifesto: {candidate.manifesto}</p>
//               <p>Education: {candidate.education}</p>
//               <button onClick={() => handleVote(candidate._id)}>Vote</button>
//             </div>
//           ))
//         ) : (
//           <p>No candidates available to vote for.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VoterDashboard;



import React, { useEffect, useState } from 'react';

const VoterDashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [voters, setVoters] = useState([]);
  const [voterId, setVoterId] = useState(null); // Initially set to null

  useEffect(() => {
    // Fetch candidates
    const fetchCandidates = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/candidates');
        if (!response.ok) throw new Error('Failed to fetch candidates');
        const data = await response.json();
        setCandidates(data);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    };

    // Fetch voters
    const fetchVoters = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/voters');
        if (!response.ok) throw new Error('Failed to fetch voters');
        const data = await response.json();
        setVoters(data);

        // For testing, you can set the voterId to the first voter in the list
        if (data.length > 0) {
          setVoterId(data[0]._id); // Replace with the actual logged-in voter's ID
        }
      } catch (error) {
        console.error('Error fetching voters:', error);
      }
    };

    fetchCandidates();
    fetchVoters();
  }, []);

  const handleVote = async (candidateId) => {
    if (!voterId) {
      alert("No voter selected.");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/vote/vote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ voterId, candidateId }),
      });

      if (!response.ok) {
        throw new Error('Voting failed');
      }

      const { msg, candidate } = await response.json();
      alert(`${msg} You voted for ${candidate.name}.`);

      // Optional: Update candidate list after voting
      const updatedResponse = await fetch('http://localhost:5000/api/candidates');
      const updatedCandidates = await updatedResponse.json();
      setCandidates(updatedCandidates);
    } catch (error) {
      alert('Voting failed. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Voter Dashboard</h2>
      <div className="candidates-list">
        {candidates.length ? (
          candidates.map((candidate) => (
            <div key={candidate._id} className="candidate-card">
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
    </div>
  );
};

export default VoterDashboard;
