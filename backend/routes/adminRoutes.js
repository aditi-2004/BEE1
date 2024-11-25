// const express = require('express');
// const router = express.Router();
// const adminController = require('../controllers/adminController');
// const { adminAuth } = require('../middleware/authMiddleware');

// router.get('/results', adminAuth, adminController.getResults);
// router.post('/add-candidate', adminAuth, adminController.addCandidate);
// router.post('/add-voter', adminAuth, adminController.addVoter);

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const { getAdminDashboardData } = require('../controllers/adminController');

// router.get('/dashboard', getAdminDashboardData);
// module.exports = router;



// src/routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const { getAdminDashboardData } = require('../controllers/adminController');

router.get('/dashboard', getAdminDashboardData);

module.exports = router;
