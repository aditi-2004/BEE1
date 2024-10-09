exports.candidateAuth = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    console.log("Token:", token); // Log the token
    if (!token) {
      return res.status(403).json({ msg: "Access denied. No token provided." });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log("Token verification error:", err); // Log verification error
        return res.status(401).json({ msg: "Access denied. Invalid token." });
      }
  
      console.log("Decoded token:", decoded); // Log decoded token
      if (decoded.role !== 'candidate') {
        return res.status(403).json({ msg: "Access denied. Candidates only." });
      }
  
      req.user = decoded; // Optionally attach the decoded user info to the request
      next();
    });
  };
  