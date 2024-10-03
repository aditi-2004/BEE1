const Candidate = require('../models/Candidate');

// Get election results for Google Charts
exports.getResults = async (req, res) => {
  try {
    const results = await Candidate.find().select('name votes');
    res.json(results);
  } catch (err) {
    res.status(500).json({ msg: 'Server Error' });
  }
};
