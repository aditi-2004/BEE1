// const jwt = require('jsonwebtoken');

// const candidateAuth = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ msg: 'Access denied. No token provided.' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // Log to verify that role is "candidate"
//     console.log('Decoded token:', decoded);

//     if (decoded.role !== 'candidate') {
//       return res.status(403).json({ msg: 'Access denied. Candidates only.' });
//     }

//     req.user = decoded;
//     next();
//   } catch (error) {
//     console.error('Token verification error:', error);
//     return res.status(400).json({ msg: 'Invalid token' });
//   }
// };

// module.exports = { candidateAuth };


const jwt = require('jsonwebtoken');

const candidateAuth = (req, res, next) => {
  // Extract the token from the Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // If no token is found, return an error response
  if (!token) {
    return res.status(401).json({ msg: 'Access denied. No token provided.' });
  }

  try {
    // Verify the token using the JWT_SECRET
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the role in the token is "candidate"
    if (decoded.role !== 'candidate') {
      console.log('Access attempt with invalid role:', decoded.role); // Log role for debug purposes
      return res.status(403).json({ msg: 'Access denied. Candidates only.' });
    }

    // Attach decoded user information to the request for further use
    req.user = decoded;
    next(); // Move to the next middleware or route handler
  } catch (error) {
    // Log any error encountered during token verification for debugging
    console.error('Token verification error:', error.message);
    return res.status(400).json({ msg: 'Invalid token' });
  }
};

module.exports = { candidateAuth };
