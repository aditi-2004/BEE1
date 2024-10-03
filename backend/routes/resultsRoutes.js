// routes/resultsRoutes.js
const express = require('express');
const router = express.Router();
const resultsController = require('../controllers/resultsController');
const { adminAuth } = require('../middleware/authMiddleware');

router.get('/', resultsController.getResults);

module.exports = router;
