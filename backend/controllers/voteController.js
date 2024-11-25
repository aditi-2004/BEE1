


// // voteController.js
// const Candidate = require('../models/Candidate');
// const Voter = require('../models/Voter');
// const Vote = require('../models/Vote');

// // Get all candidates
// exports.getCandidates = async (req, res) => {
//   try {
//     const candidates = await Candidate.find();
//     res.json(candidates);
//   } catch (err) {
//     res.status(500).json({ msg: 'Server Error' });
//   }
// };

// // Vote for a candidate
// exports.voteForCandidate = async (req, res) => {
//   try {
//     const voterId = req.user.id;  // From voterAuth middleware
//     const { candidateId } = req.body;

//     // Check if the voter exists and hasn't voted already
//     const voter = await Voter.findById(voterId);
//     if (!voter) return res.status(404).json({ msg: 'Voter not found' });
//     if (voter.hasVoted) return res.status(400).json({ msg: 'You have already voted' });

//     // Check if the candidate exists
//     const candidate = await Candidate.findById(candidateId);
//     if (!candidate) return res.status(404).json({ msg: 'Candidate not found' });

//     // Create and save the new vote
//     const vote = new Vote({ voterId, candidateId });
//     await vote.save();

//     // Update voter's hasVoted status
//     voter.hasVoted = true;
//     await voter.save();

//     // Increment the candidate's vote count
//     candidate.votes = (candidate.votes || 0) + 1;
//     await candidate.save();

//     res.status(201).json({ msg: 'Vote cast successfully' });
//   } catch (err) {
//     res.status(500).json({ msg: 'Server Error', error: err.message });
//   }
// };



// voteController.js
const Candidate = require('../models/Candidate');
const Vote = require('../models/Vote');

// Get all candidates
exports.getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.json(candidates);
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
};

// Vote for a candidate
exports.voteForCandidate = async (req, res) => {
  try {
    const { voterId, candidateId } = req.body;  // Get voterId and candidateId from the request body

    // Check if the candidate exists
    const candidate = await Candidate.findById(candidateId);
    if (!candidate) return res.status(404).json({ msg: 'Candidate not found' });

    // Increment the candidate's vote count
    candidate.votes = (candidate.votes || 0) + 1;
    await candidate.save();

    // Create and save the new vote (for tracking purposes)
    const vote = new Vote({ voterId, candidateId });
    await vote.save();

    res.status(201).json({ msg: 'Vote cast successfully', candidate });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error', error: err.message });
  }
};
