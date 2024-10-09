    // const Voter = require('../models/Voter');

    // // Register a new voter
    // exports.registerVoter = async (req, res) => {
    //   try {
    //     const voter = new Voter(req.body);
    //     await voter.save();
    //     res.status(201).json(voter);
    //   } catch (error) {
    //     res.status(400).json({ error: error.message });
    //   }
    // };

    // // Get all voters
    // exports.getVoters = async (req, res) => {
    //   try {
    //     const voters = await Voter.find();
    //     res.status(200).json(voters);
    //   } catch (error) {
    //     res.status(400).json({ error: error.message });
    //   }
    // };

    // // Get a specific voter by ID
    // exports.getVoterById = async (req, res) => {
    //   try {
    //     const voter = await Voter.findById(req.params.id);
    //     if (!voter) {
    //       return res.status(404).json({ message: 'Voter not found' });
    //     }
    //     res.status(200).json(voter);
    //   } catch (error) {
    //     res.status(400).json({ error: error.message });
    //   }
    // };




    // src/controllers/voterController.js
const Voter = require('../models/Voter');

exports.registerVoter = async (req, res) => {
  try {
    const voter = new Voter(req.body);
    await voter.save();
    res.status(201).json(voter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getVoters = async (req, res) => {
  try {
    const voters = await Voter.find();
    res.status(200).json(voters);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getVoterById = async (req, res) => {
  try {
    const voter = await Voter.findById(req.params.id);
    if (!voter) {
      return res.status(404).json({ message: 'Voter not found' });
    }
    res.status(200).json(voter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
