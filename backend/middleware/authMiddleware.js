
// const jwt = require('jsonwebtoken');

// // Helper function to extract token from header
// const extractToken = (req) => {
//   const authorizationHeader = req.header('Authorization');
//   if (!authorizationHeader) return null;
//   return authorizationHeader.split(' ')[1]; // Extract token after "Bearer"
// };

// // Admin authentication middleware
// const adminAuth = (req, res, next) => {
//   const token = extractToken(req);
//   if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     if (decoded.role !== 'admin') {
//       return res.status(403).json({ msg: 'Access denied. Admins only.' });
//     }
//     req.admin = decoded; // Attach decoded admin data to the request
//     next();
//   } catch (error) {
//     res.status(401).json({ msg: 'Token is not valid' });
//   }
// };

// // Voter authentication middleware
// const voterAuth = (req, res, next) => {
//   const token = extractToken(req);
//   if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     if (decoded.role !== 'voter') {
//       return res.status(403).json({ msg: 'Access denied. Voters only.' });
//     }
//     req.voter = decoded; // Attach decoded voter data to the request
//     next();
//   } catch (error) {
//     res.status(401).json({ msg: 'Token is not valid' });
//   }
// };

// // Candidate authentication middleware
// const candidateAuth = (req, res, next) => {
//   const token = extractToken(req);
//   if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log(res);
    
//     if (decoded.role !== 'candidate') {
//       return res.status(403).json({ msg: 'Access denied. Candidates only.' });
//     }
//     req.candidate = decoded; // Attach decoded candidate data to the request
//     next();
//   } catch (error) {
//     res.status(401).json({ msg: 'Token is not valid' });
//   }
// };

// module.exports = { adminAuth, voterAuth, candidateAuth };



const jwt = require('jsonwebtoken');

// Helper function to extract token from header
const extractToken = (req) => {
  const authorizationHeader = req.header('Authorization');
  if (!authorizationHeader) return null;
  return authorizationHeader.split(' ')[1]; // Extract token after "Bearer"
};

// Admin authentication middleware
const adminAuth = (req, res, next) => {
  const token = extractToken(req);
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== 'admin') {
      return res.status(403).json({ msg: 'Access denied. Admins only.' });
    }
    req.admin = decoded; // Attach decoded admin data to the request
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

// Voter authentication middleware
const voterAuth = (req, res, next) => {
  const token = extractToken(req);
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== 'voter') {
      return res.status(403).json({ msg: 'Access denied. Voters only.' });
    }
    req.voter = decoded; // Attach decoded voter data to the request
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

// Candidate authentication middleware
const candidateAuth = (req, res, next) => {
  const token = extractToken(req);
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== 'candidate') {
      return res.status(403).json({ msg: 'Access denied. Candidates only.' });
    }
    req.candidate = decoded; // Attach decoded candidate data to the request
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = { adminAuth, voterAuth, candidateAuth };
