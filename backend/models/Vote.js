// const mongoose = require('mongoose');

// const VoteSchema = new mongoose.Schema({
//   voterId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Voter',
//   },
//   candidateId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Candidate',
//   },
// });

// module.exports = mongoose.model('Vote', VoteSchema);


// const mongoose = require('mongoose');
// const voteSchema = new mongoose.Schema({
//   candidateId: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate', required: true },
//   // Additional fields if needed
// });
// module.exports = mongoose.model('Vote', voteSchema);

// const mongoose = require('mongoose');

// const voteSchema = new mongoose.Schema({
//   voterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Voter', required: true },
//   candidateId: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate', required: true }
// });

// module.exports = mongoose.model('Vote', voteSchema);


// const express = require('express');
// const router = express.Router();
// const voteController = require('../controllers/voteController');
// const { voterAuth } = require('../middleware/authMiddleware');

// router.get('/candidates', voterAuth, voteController.getCandidates);
// router.post('/vote', voterAuth, voteController.voteForCandidate);

// module.exports = router;


const mongoose = require('mongoose');
const voteSchema = new mongoose.Schema({
  voterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Voter',
    required: true
  },
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Candidate',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Vote', voteSchema);
