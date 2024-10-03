// // backend/server.js
// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRoutes = require('./routes/authRoutes'); // Adjust the path as needed

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors()); // Enable CORS

// // Use the authentication routes
// app.use('/api/auth', authRoutes);

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverSelectionTimeoutMS: 30000, // Increase timeout
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error('MongoDB connection error:', err));

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// backend/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const voteRoutes = require('./routes/voteRoutes'); // Ensure this file exists
const candidateRoutes = require('./routes/candidateRoutes'); // Ensure this file exists
const voterRoutes = require('./routes/voterRoutes'); // Ensure this file exists

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/vote', voteRoutes);
app.use('/api/candidates', candidateRoutes);
app.use('/api/voters', voterRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
