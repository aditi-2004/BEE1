// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import AdminLogin from './AdminLogin';
// import CandidateLogin from './CandidateLogin';
// import VoterLogin from './VoterLogin';

// const LoginPage = () => (
//   <Routes>
//     <Route path="/admin" element={<AdminLogin />} />
//     <Route path="/candidate" element={<CandidateLogin />} />
//     <Route path="/voter" element={<VoterLogin />} />
//   </Routes>
// );

// export default LoginPage;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const LoginPage = () => {
//   const [role, setRole] = useState('voter');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Simple role-based navigation
//     if (role === 'admin') {
//       navigate('/admin');
//     } else if (role === 'candidate') {
//       navigate('/candidate');
//     } else {
//       navigate('/voter');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <select value={role} onChange={(e) => setRole(e.target.value)}>
//         <option value="admin">Admin</option>
//         <option value="candidate">Candidate</option>
//         <option value="voter">Voter</option>
//       </select>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default LoginPage;
