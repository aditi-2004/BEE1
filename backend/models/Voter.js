// // backend/models/Voter.js
// const mongoose = require('mongoose');

// const voterSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ['admin', 'candidate', 'voter'], required: true },
// });

// module.exports = mongoose.model('Voter', voterSchema);

const mongoose = require('mongoose');

const voterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  hasVoted: { type: Boolean, default: false },
  password: {
    type: String,
    required: true
  },
  role: { type: String, enum: ['admin', 'candidate', 'voter'], required: true }
});

module.exports = mongoose.model('Voter', voterSchema);

