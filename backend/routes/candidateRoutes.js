// const express = require('express');
// const router = express.Router();
// const candidateController = require('../controllers/candidateController'); // Ensure this path is correct
// const { candidateAuth, adminAuth } = require('../middleware/authMiddleware'); // Ensure this path is correct

// // Add candidate (protected by adminAuth for admin users)
// router.post('/', adminAuth, candidateController.addCandidate); // Ensure addCandidate is defined in candidateController

// // Get all candidates (accessible to all users)
// router.get('/', candidateController.getCandidates); // Ensure getCandidates is defined in candidateController

// // Delete candidate (protected by adminAuth)
// router.delete('/:id', adminAuth, candidateController.deleteCandidate); // Ensure deleteCandidate is defined in candidateController

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const candidateController = require('../controllers/candidateController');
// const { adminAuth } = require('../middleware/authMiddleware');

// // Add candidate (protected by adminAuth for admin users)
// router.post('/', adminAuth, candidateController.addCandidate);

// // Get all candidates (accessible to all users, no middleware required)
// router.get('/', candidateController.getCandidates);

// // Delete candidate (protected by adminAuth)
// router.delete('/:id', adminAuth, candidateController.deleteCandidate);

// module.exports = router;        


// const express = require('express');
// const router = express.Router();
// const candidateController = require('../controllers/candidateController');
// const { candidateAuth } = require('../middleware/authMiddleware');

// router.get('/', candidateAuth, candidateController.getCandidates);
// router.post('/', candidateAuth, candidateController.addCandidate);

// module.exports = router;


// src/routes/candidateRoutes.js




// const express = require('express');
// const router = express.Router();
// const candidateController = require('../controllers/candidateController');
// const { candidateAuth } = require('../middleware/authMiddleware');

// // Route to get all candidates (protected by candidateAuth middleware)
// router.get('/', candidateAuth, candidateController.getCandidates);

// // Route to add a new candidate (protected by candidateAuth middleware)
// router.post('/', candidateAuth, candidateController.addCandidate);

// // Route to delete a candidate by ID (protected by candidateAuth middleware)
// router.delete('/:id', candidateAuth, candidateController.deleteCandidate);

// module.exports = router; // Export the router for use in the main app



// const express = require('express');
// const router = express.Router();
// const candidateController = require('../controllers/candidateController');
// const { candidateAuth } = require('../middleware/authMiddleware');

// // Route to get all candidates (protected by candidateAuth middleware)
// router.get('/', candidateAuth, candidateController.getCandidates);

// // Route to add a new candidate (protected by candidateAuth middleware)
// router.post('/', candidateAuth, candidateController.addCandidate);

// // Route to delete a candidate by ID (protected by candidateAuth middleware)
// router.delete('/:id', candidateAuth, candidateController.deleteCandidate);
// module.exports = router;





// src/routes/candidateRoutes.js





// const express = require('express');
// const router = express.Router();
// const candidateController = require('../controllers/candidateController');
// const { candidateAuth } = require('../middleware/authMiddleware');

// router.get('/', candidateAuth, candidateController.getCandidates);
// router.post('/', candidateAuth, candidateController.addCandidate);
// router.delete('/:id', candidateAuth, candidateController.deleteCandidate);

// module.exports = router;





const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidateController');
const { candidateAuth } = require('../middleware/authMiddleware');

// // Get all candidates
// router.get('/', candidateAuth, candidateController.getCandidates);

// // Get a specific candidate by ID
// router.get('/:id', candidateAuth, candidateController.getCandidateById);

// // Add a new candidate
// router.post('/', candidateAuth, candidateController.addCandidate);

// // Update a candidate by ID
// router.put('/:id', candidateAuth, candidateController.updateCandidate);

// // Delete a candidate by ID
// router.delete('/:id', candidateAuth, candidateController.deleteCandidate);


// Get all candidates
router.get('/', candidateController.getCandidates);

// Get a specific candidate by ID
router.get('/:id', candidateController.getCandidateById);

// Add a new candidate
router.post('/', candidateController.addCandidate);

// Update a candidate by ID
router.put('/:id', candidateController.updateCandidate);

// Delete a candidate by ID
router.delete('/:id', candidateController.deleteCandidate);

module.exports = router;

