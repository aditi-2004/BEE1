// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/authController'); // Ensure this path is correct

// // Route for user registration
// router.post('/register', authController.register); // Ensure `register` is defined in authController

// // Route for user login
// router.post('/login', authController.login); // Ensure `login` is defined in authController

// module.exports = router;



const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Ensure this path is correct

// Route for user registration
router.post('/register', authController.register);

// Route for user login
router.post('/login', authController.login);

module.exports = router;
