// const Candidate = require('../models/Candidate');
// const Voter = require('../models/Voter');
// const Vote = require('../models/Vote');
// // Get candidates
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
//     const { voterId, candidateId } = req.body;
//     const voter = await Voter.findById(voterId);
//     if (!voter) return res.status(404).json({ msg: 'Voter not found' });
//     if (voter.hasVoted) return res.status(400).json({ msg: 'Voter has already voted' });

//     const vote = new Vote({ voterId, candidateId });
//     await vote.save();

//     voter.hasVoted = true;
//     await voter.save();
    
//     await Candidate.findByIdAndUpdate(candidateId, { $inc: { votes: 1 } });

//     res.status(201).json({ msg: 'Vote cast successfully' });
//   } catch (err) {
//     res.status(500).json({ msg: 'Server Error' });
//   }
// };




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
//     const { voterId, candidateId } = req.body;

//     // Find the voter
//     const voter = await Voter.findById(voterId);
//     if (!voter) return res.status(404).json({ msg: 'Voter not found' });
//     if (voter.hasVoted) return res.status(400).json({ msg: 'Voter has already voted' });

//     // Create a new vote
//     const vote = new Vote({ voterId, candidateId });
//     await vote.save();

//     // Update voter status
//     voter.hasVoted = true;
//     await voter.save();
    
//     // Increment candidate votes
//     await Candidate.findByIdAndUpdate(candidateId, { $inc: { votes: 1 } });

//     res.status(201).json({ msg: 'Vote cast successfully' });
//   } catch (err) {
//     res.status(500).json({ msg: 'Server Error' });
//   }
// };



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
//     const { voterId, candidateId } = req.body;

//     // Find the voter
//     const voter = await Voter.findById(voterId);
//     if (!voter) return res.status(404).json({ msg: 'Voter not found' });
//     if (voter.hasVoted) return res.status(400).json({ msg: 'Voter has already voted' });

//     // Check if the candidate exists
//     const candidate = await Candidate.findById(candidateId);
//     if (!candidate) return res.status(404).json({ msg: 'Candidate not found' });

//     // Create a new vote
//     const vote = new Vote({ voterId, candidateId });
//     await vote.save();

//     // Update voter status
//     voter.hasVoted = true;
//     await voter.save();
    
//     // Increment candidate votes
//     candidate.votes += 1;
//     await candidate.save();

//     res.status(201).json({ msg: 'Vote cast successfully' });
//   } catch (err) {
//     res.status(500).json({ msg: 'Server Error', error: err.message });
//   }
// };


// In your voteController.js
const Candidate = require('../models/Candidate');
const Voter = require('../models/Voter');
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
    const { voterId, candidateId } = req.body;

    // Find the voter
    const voter = await Voter.findById(voterId);
    if (!voter) return res.status(404).json({ msg: 'Voter not found' });
    if (voter.hasVoted) return res.status(400).json({ msg: 'Voter has already voted' });

    // Check if the candidate exists
    const candidate = await Candidate.findById(candidateId);
    if (!candidate) return res.status(404).json({ msg: 'Candidate not found' });

    // Create a new vote
    const vote = new Vote({ voterId, candidateId });
    await vote.save();

    // Update voter status
    voter.hasVoted = true;
    await voter.save();
    
    // Increment candidate votes
    candidate.votes += 1;
    await candidate.save();

    res.status(201).json({ msg: 'Vote cast successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error', error: err.message });
  }
};
