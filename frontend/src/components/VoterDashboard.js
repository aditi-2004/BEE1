// import React, { useEffect, useState } from 'react';
// import './VoterDashboard.css'; // For styles

// const VoterDashboard = () => {
//   const [candidates, setCandidates] = useState([]);

//   useEffect(() => {
//     const fetchCandidates = async () => {
//       const token = localStorage.getItem('token');
//       const response = await fetch('/api/vote/candidates', {
//         headers: { 'Authorization': `Bearer ${token}` },
//       });
//       const data = await response.json();
//       setCandidates(data);
//     };

//     fetchCandidates();
//   }, []);

//   const handleVote = async (candidateId) => {
//     const token = localStorage.getItem('token');
//     const voterId = 'YOUR_VOTER_ID';  // Replace with the actual voter ID

//     await fetch('/api/vote/vote', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,
//       },
//       body: JSON.stringify({ voterId, candidateId }),
//     });

//     alert('Vote cast successfully');
//   };

//   return (
//     <div className="container">
//       <h2>Voter Dashboard</h2>
//       <div className="candidates-list">
//         {candidates.map((candidate) => (
//           <div key={candidate._id} className="candidate-card">
//             <h3>{candidate.name}</h3>
//             <p>{candidate.facilities}</p>
//             <p>{candidate.experience}</p>
//             <p>{candidate.manifesto}</p>
//             <p>{candidate.education}</p>
//             <button onClick={() => handleVote(candidate._id)}>Vote</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VoterDashboard;


// // src/components/VoterDashboard.js
// import React, { useEffect, useState } from 'react';
// import './VoterDashboard.css'; // For styles

// const VoterDashboard = () => {
//   const [candidates, setCandidates] = useState([]);

//   useEffect(() => {
//     const fetchCandidates = async () => {
//       const token = localStorage.getItem('token');
//       const response = await fetch('/api/vote/candidates', {
//         headers: { 'Authorization': `Bearer ${token}` },
//       });
//       const data = await response.json();
//       setCandidates(data);
//     };

//     fetchCandidates();
//   }, []);

//   const handleVote = async (candidateId) => {
//     try {
//       const token = localStorage.getItem('token');
//       const voterId = localStorage.getItem('voterId'); // Assume this is stored when the voter logs in

//       const response = await fetch('/api/vote/vote', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify({ voterId, candidateId }),
//       });

//       if (!response.ok) {
//         throw new Error('Voting failed');
//       }

//       alert('Vote cast successfully');
      
//       // Optional: Re-fetch candidates to update votes UI after voting
//       const updatedCandidates = await fetch('/api/vote/candidates', {
//         headers: { 'Authorization': `Bearer ${token}` },
//       }).then((res) => res.json());

//       setCandidates(updatedCandidates);
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Voter Dashboard</h2>
//       <div className="candidates-list">
//         {candidates.map((candidate) => (
//           <div key={candidate._id} className="candidate-card">
//             <h3>{candidate.name}</h3>
//             <p>{candidate.facilities}</p>
//             <p>{candidate.experience}</p>
//             <p>{candidate.manifesto}</p>
//             <p>{candidate.education}</p>
//             <button onClick={() => handleVote(candidate._id)}>Vote</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VoterDashboard;



// // src/components/VoterDashboard.js
// import React, { useEffect, useState } from 'react';
// import './VoterDashboard.css';

// const VoterDashboard = () => {
//   // const [candidates, setCandidates] = useState([{"_id":{"$oid":"6729b4ceeba69618da3542fa"},"name":"Sarah Wilson","facilities":"Public Health, Welfare","experience":"4 years in public health initiatives","manifesto":"Improving community health services and support systems","education":"Master's in Public Health"}]);
//   const [candidates, setCandidates] = useState([]);

//   useEffect(() => {
//     const fetchCandidates = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         // const response = await fetch('http://localhost:5000/api/candidates', {
//         //   headers: { 'Authorization': `Bearer ${token}` },
//         // });
//         const response = await fetch('http://localhost:5000/api/candidates'
//         );
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
//       const token = localStorage.getItem('token');

//       const response = await fetch('http://localhost:5000/api/vote/vote', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`,
//         },
//         body: JSON.stringify({ candidateId }),
//       });

//       if (!response.ok) {
//         throw new Error('Voting failed');
//       }

//       alert('Vote cast successfully');
      
//       // Re-fetch candidates to update votes UI after voting
//       const updatedCandidates = await fetch('http://localhost:5000/api/candidates', {
//         headers: { 'Authorization': `Bearer ${token}` },
//       }).then((res) => res.json());

//       setCandidates(updatedCandidates);
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Voter Dashboard</h2>
//       <div className="candidates-list">
//         {candidates.map((candidate) => (
//           <div key={candidate._id} className="candidate-card">
//             <h3>{candidate.name}</h3>
//             <p>Facilities: {candidate.facilities}</p>
//             <p>Experience: {candidate.experience}</p>
//             <p>Manifesto: {candidate.manifesto}</p>
//             <p>Education: {candidate.education}</p>
//             <button onClick={() => handleVote(candidate._id)}>Vote</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VoterDashboard;


// // src/components/VoterDashboard.js
// import React, { useEffect, useState } from 'react';
// import './VoterDashboard.css';

// const VoterDashboard = () => {
//   const [candidates, setCandidates] = useState([]);

//   // Fetch candidates from the backend
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
//   const handleVote = async (candidateId) => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch('http://localhost:5000/api/vote/vote', {
//         method: 'POST',
//         // headers: {
//         //   'Content-Type': 'application/json',
//         //   'Authorization': `Bearer ${token}`,
//         // },
//         body: JSON.stringify({ candidateId }),
//       });

//       if (!response.ok) throw new Error('Voting failed');

//       alert('Vote cast successfully');

//       // Re-fetch candidates to update votes in the UI after voting
//       const updatedResponse = await fetch('http://localhost:5000/api/candidates', {
//         // headers: { 'Authorization': `Bearer ${token}` },
//       });
//       const updatedCandidates = await updatedResponse.json();
//       setCandidates(updatedCandidates);

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


// // src/components/VoterDashboard.js
// import React, { useEffect, useState } from 'react';

// const VoterDashboard = () => {
//   const [candidates, setCandidates] = useState([]);

//   // Fetch candidates from the backend
//   useEffect(() => {
//     const fetchCandidates = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/candidates');
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
//       const response = await fetch('http://localhost:5000/api/vote/vote', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({voterId, candidateId }), // Send the candidateId to the backend
//       });

//       if (!response.ok) {throw new Error('Voting failed')};
//       const { msg, candidate } = await response.json();
//       alert(`${msg} You voted for ${candidate.name}.`);

//       // Re-fetch candidates to update votes in the UI after voting
//       const updatedResponse = await fetch('http://localhost:5000/api/candidates');
//       const updatedCandidates = await updatedResponse.json();
//       setCandidates(updatedCandidates);
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

// const VoterDashboard = () => {
//   const [candidates, setCandidates] = useState([]);
//   const [voterId, setVoterId] = useState("672db021541d74f109866726"); // Replace this with your dynamic voter ID source

//   useEffect(() => {
//     const fetchCandidates = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/candidates');
//         if (!response.ok) throw new Error('Failed to fetch candidates');
//         const data = await response.json();
//         setCandidates(data);
//       } catch (error) {
//         console.error('Error fetching candidates:', error);
//       }
//     };

//     fetchCandidates();
//   }, []);

//   const handleVote = async ({ voterId, candidateId }) => {
//       voterId="672db021541d74f109866726",
//       candidateId="66ff7579539c962cd531d7d3"
//     const response = await fetch('http://localhost:5000/api/vote/vote', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
    
//       body: JSON.stringify({ voterId, candidateId }),
//     });
  
//     if (!response.ok) {
//       alert('Voting failed. Please try again.'); // You can customize this message
//       return; // Exit the function if response is not OK
//     }
  
//     const { msg, candidate } = await response.json();
//     alert(`${msg} You voted for ${candidate.name}.`);
  
//     // const updatedResponse = await fetch('http://localhost:5000/api/candidates');
//     // const updatedCandidates = await updatedResponse.json();
//     // setCandidates(updatedCandidates);
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
//               <button onClick={() => handleVote(voterId,candidate._id)}>Vote</button>
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
          setVoterId(data[0]._id); // You can update this to get the logged-in voter's ID dynamically
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
