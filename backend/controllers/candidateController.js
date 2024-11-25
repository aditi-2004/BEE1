// const Candidate = require('../models/Candidate'); // Ensure this path is correct

// // Add a new candidate
// exports.addCandidate = async (req, res) => {
//   try {
//     const candidate = new Candidate(req.body);
//     await candidate.save();
//     res.status(201).json(candidate);
//   } catch (error) {
//     res.status(500).json({ message: 'Error adding candidate', error });
//   }
// };

// // Get all candidates
// exports.getCandidates = async (req, res) => {
//   try {
//     const candidates = await Candidate.find();
//     res.status(200).json(candidates);
//   } catch (error) {
//     res.status(500).json({ message: 'Error retrieving candidates', error });
//   }
// };

// // Delete a candidate
// exports.deleteCandidate = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedCandidate = await Candidate.findByIdAndDelete(id);
//     if (!deletedCandidate) {
//       return res.status(404).json({ message: 'Candidate not found' });
//     }
//     res.status(200).json({ message: 'Candidate deleted' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting candidate', error });
//   }
// };



// const Candidate = require('../models/Candidate'); // Ensure this path is correct

// // Add a new candidate
// exports.addCandidate = async (req, res) => {
//   try {
//     const candidate = new Candidate(req.body);
//     await candidate.save();
//     res.status(201).json(candidate);
//   } catch (error) {
//     res.status(500).json({ message: 'Error adding candidate', error });
//   }
// };

// // Get all candidates
// exports.getCandidates = async (req, res) => {
//   try {
//     const candidates = await Candidate.find();
//     res.status(200).json(candidates);
//   } catch (error) {
//     res.status(500).json({ message: 'Error retrieving candidates', error });
//   }
// };

// // Delete a candidate
// exports.deleteCandidate = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedCandidate = await Candidate.findByIdAndDelete(id);
//     if (!deletedCandidate) {
//       return res.status(404).json({ message: 'Candidate not found' });
//     }
//     res.status(200).json({ message: 'Candidate deleted' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting candidate', error });
//   }
// };


// // src/controllers/candidateController.js
// const Candidate = require('../models/Candidate.js'); // Ensure this path is correct

// // Add a new candidate
// exports.addCandidate = async (req, res) => {
//   try {
//     const candidate = new Candidate(req.body);
//     await candidate.save();
//     res.status(201).json(candidate);
//   } catch (error) {
//     console.error('Error adding candidate:', error);
//     res.status(500).json({ message: 'Error adding candidate', error });
//   }
// };

// // Get all candidates
// exports.getCandidates = async (req, res) => {
//   try {
//     const candidates = await Candidate.find();
//     res.status(200).json(candidates);
//   } catch (error) {
//     console.error('Error retrieving candidates:', error);
//     res.status(500).json({ message: 'Error retrieving candidates', error });
//   }
// };

// // Delete a candidate
// exports.deleteCandidate = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedCandidate = await Candidate.findByIdAndDelete(id);
//     if (!deletedCandidate) {
//       return res.status(404).json({ message: 'Candidate not found' });
//     }
//     res.status(200).json({ message: 'Candidate deleted' });
//   } catch (error) {
//     console.error('Error deleting candidate:', error);
//     res.status(500).json({ message: 'Error deleting candidate', error });
//   }
// };



// // src/controllers/candidateController.js
// const Candidate = require('../models/Candidate.js'); // Ensure this path is correct

// exports.addCandidate = async (req, res) => {
//   try {
//     const candidate = new Candidate(req.body); // Create a new candidate instance with request body
//     await candidate.save(); // Save the candidate to the database
//     res.status(201).json({ message: 'Candidate added successfully', candidate });
//   } catch (error) {
//     console.error('Error adding candidate:', error);
//     res.status(500).json({ message: 'Error adding candidate', error });
//   }
// };

// // Get all candidates
// exports.getCandidates = async (req, res) => {
//   try {
//     const candidates = await Candidate.find(); // Retrieve all candidates from the database
//     res.status(200).json(candidates); // Respond with candidates
//   } catch (error) {
//     console.error('Error retrieving candidates:', error);
//     res.status(500).json({ message: 'Error retrieving candidates', error });
//   }
// };

// // Delete a candidate
// exports.deleteCandidate = async (req, res) => {
//   try {
//     const { id } = req.params; // Extract candidate ID from request parameters
//     const deletedCandidate = await Candidate.findByIdAndDelete(id); // Attempt to delete the candidate
//     if (!deletedCandidate) {
//       return res.status(404).json({ message: 'Candidate not found' }); // Handle case where candidate is not found
//     }
//     res.status(200).json({ message: 'Candidate deleted successfully' }); // Respond with success message
//   } catch (error) {
//     console.error('Error deleting candidate:', error);
//     res.status(500).json({ message: 'Error deleting candidate', error });
//   }
// };



// src/controllers/candidateController.js

// const Candidate = require('../models/Candidate.js');

// exports.addCandidate = async (req, res) => {
//   try {
//     const candidate = new Candidate(req.body);
//     await candidate.save();
//     res.status(201).json({ message: 'Candidate added successfully', candidate });
//   } catch (error) {
//     console.error('Error adding candidate:', error);
//     res.status(500).json({ message: 'Error adding candidate', error });
//   }
// };

// exports.getCandidates = async (req, res) => {
//   try {
//     const candidates = await Candidate.find();
//     res.status(200).json(candidates);
//   } catch (error) {
//     console.error('Error retrieving candidates:', error);
//     res.status(500).json({ message: 'Error retrieving candidates', error });
//   }
// };

// exports.deleteCandidate = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedCandidate = await Candidate.findByIdAndDelete(id);
//     if (!deletedCandidate) {
//       return res.status(404).json({ message: 'Candidate not found' });
//     }
//     res.status(200).json({ message: 'Candidate deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting candidate:', error);
//     res.status(500).json({ message: 'Error deleting candidate', error });
//   }
// };




const Candidate = require('../models/Candidate.js');

// Add a new candidate
exports.addCandidate = async (req, res) => {
  try {
    const candidate = new Candidate(req.body);
    await candidate.save();
    res.status(201).json({ message: 'Candidate added successfully', candidate });
  } catch (error) {
    console.error('Error adding candidate:', error);
    res.status(500).json({ message: 'Error adding candidate', error });
  }
};

// Get all candidates
exports.getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.status(200).json(candidates);
  } catch (error) {
    console.error('Error retrieving candidates:', error);
    res.status(500).json({ message: 'Error retrieving candidates', error });
  }
};

// Get a specific candidate by ID
exports.getCandidateById = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);
    if (!candidate) return res.status(404).json({ message: 'Candidate not found' });
    res.json(candidate);
  } catch (error) {
    console.error('Error retrieving candidate:', error);
    res.status(500).json({ message: 'Error retrieving candidate', error });
  }
};

// Update a candidate by ID
exports.updateCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!candidate) return res.status(404).json({ message: 'Candidate not found' });
    res.json(candidate);
  } catch (error) {
    console.error('Error updating candidate:', error);
    res.status(500).json({ message: 'Error updating candidate', error });
  }
};

// Delete a candidate by ID
exports.deleteCandidate = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCandidate = await Candidate.findByIdAndDelete(id);
    if (!deletedCandidate) {
      return res.status(404).json({ message: 'Candidate not found' });
    }
    res.status(200).json({ message: 'Candidate deleted successfully' });
  } catch (error) {
    console.error('Error deleting candidate:', error);
    res.status(500).json({ message: 'Error deleting candidate', error });
  }
};
