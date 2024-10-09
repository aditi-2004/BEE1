// frontend/src/api/index.js
export const fetchUsers = async () => {
    const response = await fetch('http://localhost:5000/api/users');
    return response.json();
  };
  
  export const fetchVoters = async () => {
    const response = await fetch('http://localhost:5000/api/voters');
    return response.json();
  };
  
  export const fetchCandidates = async () => {
    const response = await fetch('http://localhost:5000/api/candidates');
    return response.json();
  };
  
  export const fetchResults = async () => {
    const response = await fetch('http://localhost:5000/api/results');
    return response.json();
  };
  