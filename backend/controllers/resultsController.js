// const Candidate = require('../models/Candidate');

// // Get election results for Google Charts
// exports.getResults = async (req, res) => {
//   try {
//     const results = await Candidate.find().select('name votes');
//     res.json(results);
//   } catch (err) {
//     res.status(500).json({ msg: 'Server Error' });
//   }
// };


// const Candidate = require('../models/Candidate');

// // Get election results for Google Charts
// exports.getResults = async (req, res) => {
//   try {
//     const results = await Candidate.find().select('name votes');
    
//     // Format results for the chart
//     const chartData = [['Candidate', 'Votes']];
//     results.forEach(result => {
//       chartData.push([result.name, result.votes || 0]);
//     });

//     res.json(chartData);
//   } catch (err) {
//     res.status(500).json({ msg: 'Server Error' });
//   }
// };




// const Candidate = require('../models/Candidate');
// const Vote = require('../models/Vote');  // Assuming you have a Vote model

// exports.getResults = async (req, res) => {
//   try {
//     // Fetch candidates' data
//     const candidates = await Candidate.find().select('name votes');
    
//     // Get the winner (candidate with maximum votes)
//     const winner = candidates.reduce((prev, current) => (prev.votes > current.votes) ? prev : current, {});

//     // Fetch voter-candidate mapping (assuming each vote has a voterId and candidateId)
//     const voterCandidateData = await Vote.aggregate([
//       {
//         $lookup: {
//           from: 'candidates',  // Collection name for candidates
//           localField: 'candidateId',
//           foreignField: '_id',
//           as: 'candidate'
//         }
//       },
//       { $unwind: '$candidate' },
//       {
//         $project: {
//           voterId: 1,
//           candidate: '$candidate.name'
//         }
//       }
//     ]);

//     // Prepare data for the pie chart (candidate votes)
//     const pieChartData = candidates.map(candidate => ({
//       name: candidate.name,
//       votes: candidate.votes
//     }));

//     // Send the response
//     res.json({
//       winner,
//       voterCandidateData,
//       pieChartData
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: 'Server Error' });
//   }
// };



const Candidate = require('../models/Candidate');
const Vote = require('../models/Vote');  // Assuming you have a Vote model
const Voter = require('../models/Voter'); // Import the Voter model

exports.getResults = async (req, res) => {
  try {
    // Fetch all candidates and their votes
    const candidates = await Candidate.find().select('name votes');
    
    // Get the winner (candidate with maximum votes)
    const winner = candidates.reduce((prev, current) => (prev.votes > current.votes) ? prev : current, {});

    // Fetch voter-candidate mapping with voter names
    const voterCandidateData = await Vote.aggregate([
      {
        $lookup: {
          from: 'candidates',  // Collection name for candidates
          localField: 'candidateId',
          foreignField: '_id',
          as: 'candidate'
        }
      },
      { 
        $unwind: '$candidate' 
      },
      {
        $lookup: {
          from: 'voters',  // Collection name for voters
          localField: 'voterId',
          foreignField: '_id',
          as: 'voter'
        }
      },
      { 
        $unwind: '$voter' 
      },
      {
        $project: {
          voterName: '$voter.name',
          candidateName: '$candidate.name',
        }
      }
    ]);

    // Prepare data for the pie chart (candidate votes)
    const pieChartData = candidates.map(candidate => ({
      name: candidate.name,
      votes: candidate.votes
    }));

    // Send the response
    res.json({
      winner,
      voterCandidateData,
      pieChartData
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
};
