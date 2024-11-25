const Candidate = require('../models/Candidate');
const Voter = require('../models/Voter');

// Get election results
exports.getResults = async (req, res) => {
  try {
    const results = await Candidate.aggregate([
      { $group: { _id: '$name', totalVotes: { $sum: '$votes' } } },
    ]);
    res.json(results);
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

// Add a new candidate
exports.addCandidate = async (req, res) => {
  const { name, facilities } = req.body;
  try {
    const newCandidate = new Candidate({ name, facilities });
    await newCandidate.save();
    res.status(201).json(newCandidate);
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};

// Add a new voter
exports.addVoter = async (req, res) => {
  const { email } = req.body;
  try {
    const newVoter = new Voter({ email });
    await newVoter.save();
    res.status(201).json(newVoter);
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
};
