// // src/components/Results.js
// import React, { useEffect, useState } from 'react';
// import { Chart } from 'react-google-charts';
// import axios from 'axios';

// const Results = () => {
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const fetchResults = async () => {
//       const res = await axios.get('/api/results');
//       setResults(res.data);
//     };
//     fetchResults();
//   }, []);

//   const data = [
//     ['Candidate', 'Votes'],
//     ...results.map(result => [result.candidateName, result.votes])
//   ];

//   const options = {
//     title: 'Election Results',
//     pieHole: 0.4,
//     is3D: false,
//   };

//   return (
//     <div>
//       <h1>Election Results</h1>
//       <Chart
//         chartType="PieChart"
//         data={data}
//         options={options}
//         width="100%"
//         height="400px"
//       />
//     </div>
//   );
// };

// export default Results;





import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';
import axios from 'axios';

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Fetch election results from backend
    const fetchResults = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/results');
        setResults(response.data);
      } catch (err) {
        console.error('Error fetching results:', err);
      }
    };
    fetchResults();
  }, []);

  // Prepare data for the chart
  const data = [
    ['Candidate', 'Votes'],
    ...results.map(result => [result[0], result[1]]),
  ];

  const options = {
    title: 'Election Results',
    is3D: true,
    pieSliceText: 'percentage',
    slices: { 0: { offset: 0.1 }, 1: { offset: 0.1 } },
  };

  return (
    <div>
      <h1>Election Results</h1>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={'100%'}
        height={'400px'}
      />
    </div>
  );
};

export default Results;
