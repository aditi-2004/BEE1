import React, { useEffect, useState } from 'react';
import { fetchUsers, fetchVoters, fetchCandidates, fetchResults } from './api/admin'; // Replace with your API functions
import { Line } from 'react-chartjs-2'; // Assuming you use Chart.js for graphs

const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [voters, setVoters] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [results, setResults] = useState({});

  useEffect(() => {
    const loadData = async () => {
      try {
        const usersData = await fetchUsers();
        const votersData = await fetchVoters();
        const candidatesData = await fetchCandidates();
        const resultsData = await fetchResults();

        setUsers(usersData);
        setVoters(votersData);
        setCandidates(candidatesData);
        setResults(resultsData);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadData();
  }, []);

  return (
    <div>
      <h1>User Dashboard</h1>
      <section>
        <h2>Users</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Voters</h2>
        <ul>
          {voters.map(voter => (
            <li key={voter.id}>{voter.name}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Candidates</h2>
        <ul>
          {candidates.map(candidate => (
            <li key={candidate.id}>{candidate.name}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Results</h2>
        <Line data={results} /> {/* Example chart */}
      </section>
    </div>
  );
};

export default UserDashboard;
