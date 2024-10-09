// src/components/Results.js
import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import axios from 'axios';

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const res = await axios.get('/api/results');
      setResults(res.data);
    };
    fetchResults();
  }, []);

  const data = [
    ['Candidate', 'Votes'],
    ...results.map(result => [result.candidateName, result.votes])
  ];

  const options = {
    title: 'Election Results',
    pieHole: 0.4,
    is3D: false,
  };

  return (
    <div>
      <h1>Election Results</h1>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />
    </div>
  );
};

export default Results;
