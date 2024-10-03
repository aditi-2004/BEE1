import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import api from '../services/api';
import './GoogleChart.css';

const GoogleChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    const res = await api.get('/api/results');
    const chartData = [['Candidate', 'Votes']];
    res.data.forEach(result => {
      chartData.push([result.name, result.votes]);
    });
    setData(chartData);
  };

  return (
    <div className="chart-container">
      <h2>Election Results</h2>
      {data.length > 1 ? (
        <Chart
          chartType="PieChart"
          data={data}
          options={{ title: 'Election Results' }}
          width={'100%'}
          height={'400px'}
        />
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default GoogleChart;
