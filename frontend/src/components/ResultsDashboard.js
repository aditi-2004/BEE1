
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { DataGrid } from '@mui/x-data-grid';
import './ResultsDashboard.css'

// Register necessary components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const ResultsDashboard = () => {
  const [winner, setWinner] = useState(null);
  const [voterCandidateData, setVoterCandidateData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    // Fetch the results data using fetch
    const fetchResults = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/results');
        if (!response.ok) {
          throw new Error('Failed to fetch results');
        }
        const data = await response.json();
        const { winner, voterCandidateData, pieChartData } = data;
        setWinner(winner);
        setVoterCandidateData(voterCandidateData);
        setPieChartData(pieChartData);
      } catch (err) {
        console.error('Error fetching results', err);
      }
    };
    fetchResults();
  }, []);

  // Configure data for the data grid to show voter-candidate mapping
  const rows = voterCandidateData.map((data, index) => ({
    id: index + 1,
    voterId: data.voterId,
    voterName: data.voterName,
    candidateName: data.candidateName,
  }));

  const columns = [
    { field: 'voterId', headerName: 'Voter ID', width: 150 },
    { field: 'voterName', headerName: 'Voter Name', width: 200 },
    { field: 'candidateName', headerName: 'Candidate Name', width: 200 },
  ];

  // Pie chart data for candidate vote distribution
  const pieData = {
    labels: pieChartData.map(candidate => candidate.name),
    datasets: [
      {
        data: pieChartData.map(candidate => candidate.votes),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return (
    <div className="results-dashboard">
      <h1>Results Dashboard</h1>

      {winner && (
        <div className="winner">
          <h2>Winning Candidate: {winner.name} with {winner.votes} votes</h2>
        </div>
      )}

      <h3>Voter-Candidate Mapping</h3>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </div>

      <h3>Candidate Votes Distribution</h3>
      <div className="pie-chart-container">
        <Pie
          data={pieData}
          options={{
            responsive: true,
            plugins: { legend: { position: 'right' } },
          }}
        />
      </div>
    </div>
  );
};

export default ResultsDashboard;
