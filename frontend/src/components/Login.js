// // src/components/Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email, password })
//       });

//       const data = await response.json();
//       if (response.ok) {
//         localStorage.setItem('token', data.token);
//         navigate('/dashboard'); // Redirect to dashboard
//       } else {
//         console.error('Login response error:', data.message);
//         setError(data.message); // Display error message from backend
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <h2>Login</h2>
//       <label>
//         Email:
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </label>
//       <br />
//       <button type="submit">Login</button>
//       {error && <p>{error}</p>}
//     </form>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('admin'); // Default to 'admin' or allow selection
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(`http://localhost:5000/api/auth/login/${role}`, {
//         email,
//         password
//       });

//       const { token } = response.data;
//       localStorage.setItem('token', token); // Store token in local storage

//       // Redirect based on role
//       if (role === 'admin') {
//         navigate('/admin');
//       } else if (role === 'candidate') {
//         navigate('/candidate');
//       } else if (role === 'voter') {
//         navigate('/voter');
//       }
//     } catch (error) {
//       console.error('Login error:', error.response?.data?.message || error.message);
//       // Handle error (e.g., display an error message to the user)
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//         />
//         <select value={role} onChange={(e) => setRole(e.target.value)} required>
//           <option value="admin">Admin</option>
//           <option value="candidate">Candidate</option>
//           <option value="voter">Voter</option>
//         </select>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('voter'); // Default role is 'voter'
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email, password, role }) // Include role in the request body
//       });

//       const data = await response.json();
//       if (response.ok) {
//         localStorage.setItem('token', data.token);

//         // Redirect based on the selected role
//         if (role === 'admin') {
//           navigate('/admin');  // Redirect to Admin dashboard
//         } else if (role === 'candidate') {
//           navigate('/candidate');  // Redirect to Candidate dashboard
//         } else if (role === 'voter') {
//           navigate('/voter');  // Redirect to Voter dashboard
//         }
//       } else {
//         console.error('Login response error:', data.message);
//         setError(data.message); // Display error message from backend
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <h2>Login</h2>
//       <label>
//         Email:
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </label>
//       <br />
//       <label>
//         Role:
//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="admin">Admin</option>
//           <option value="voter">Voter</option>
//           <option value="candidate">Candidate</option>
//         </select>
//       </label>
//       <br />
//       <button type="submit">Login</button>
//       {error && <p>{error}</p>}
//     </form>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css'; // Add this to link the CSS

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('voter');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password, role }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         localStorage.setItem('token', data.token);
//         navigate(`/${role}`);
//       } else {
//         setError(data.message);
//       }
//     } catch (error) {
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleLogin}>
//         <h2>Login</h2>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <label>Role:</label>
//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="admin">Admin</option>
//           <option value="voter">Voter</option>
//           <option value="candidate">Candidate</option>
//         </select>
//         <button type="submit">Login</button>
//         {error && <p className="error">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Login;


// // src/components/Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css'; // Add this to link the CSS

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('voter');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password, role }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         localStorage.setItem('token', data.token);
//         navigate(`/${role}`); // Navigate based on role
//       } else {
//         setError(data.msg); // Use msg from server response
//       }
//     } catch (error) {
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleLogin}>
//         <h2>Login</h2>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <label>Role:</label>
//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="admin">Admin</option>
//           <option value="voter">Voter</option>
//           <option value="candidate">Candidate</option>
//         </select>
//         <button type="submit">Login</button>
//         {error && <p className="error">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default Login;


// src/components/Login.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('voter');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Check URL for role parameter on page load
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const initialRole = searchParams.get('role');
    if (initialRole) setRole(initialRole);
  }, [location]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, role }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate(`/${role}`);
      } else {
        setError(data.msg);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="admin">Admin</option>
          <option value="voter">Voter</option>
          <option value="candidate">Candidate</option>
        </select>
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
