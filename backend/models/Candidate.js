



// const mongoose = require('mongoose');

// const CandidateSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   facilities: {
//     type: String,
//     required: true,
//   },
//   experience: {
//     type: String,
//     required: true,
//   },
//   manifesto: {
//     type: String,
//     required: true,
//   },
//   education: {
//     type: String,
//     required: true,
//   },
//   votes: {
//     type: Number,
//     default: 0,
//   },
// });

// module.exports = mongoose.model('Candidate', CandidateSchema);


// const mongoose = require('mongoose');

// const candidateSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   facilities: { type: String, required: true },
//   experience: { type: String, required: true },
//   manifesto: { type: String, required: true },
//   education: { type: String, required: true },
//   votes: { type: Number, default: 0 } // Track number of votes
// });

// module.exports = mongoose.model('Candidate', candidateSchema);



const mongoose = require('mongoose');
const candidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  facilities: { type: String, required: true },
  experience: { type: String, required: true },
  manifesto: { type: String, required: true },
  education: { type: String, required: true },
  votes: { type: Number, default: 0 }, // Track number of votes
  role: { type: String, default: 'candidate' } // Ensure the role is set as 'candidate'
});

module.exports = mongoose.model('Candidate', candidateSchema);




