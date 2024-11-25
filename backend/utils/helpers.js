// Add any helper functions you may need here
const jwt = require('jsonwebtoken');

// Generate JWT token
exports.generateToken = (user, secretKey, expiresIn = '100h') => {
  const payload = { id: user._id, role: user.role };
  return jwt.sign(payload, secretKey, { expiresIn });
};

// Format time to readable format
exports.formatTime = (time) => {
  const date = new Date(time);
  return date.toLocaleString();
};
