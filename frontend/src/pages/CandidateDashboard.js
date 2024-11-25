// // src/pages/CandidateDashboard.js

// import React, { useState } from 'react';

// const CandidateDashboard = () => {
//   const [formData, setFormData] = useState({ name: '', facilities: '' });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Submit form data to the backend
//       await fetch('http://localhost:5000/api/candidates', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });
//       alert('Candidate details submitted successfully');
//     } catch (error) {
//       console.error('Error submitting candidate details:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Candidate Dashboard</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </div>
//         <div>
//           <label>Facilities</label>
//           <textarea name="facilities" value={formData.facilities} onChange={handleChange} required />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CandidateDashboard;





// // src/pages/CandidateDashboard.js
import React, { useState } from 'react';

const CandidateDashboard = () => {
  const [formData, setFormData] = useState({ name: '', facilities: '', experience: '', manifesto: '', education: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("this is handle submit");
    
    try {
      await fetch('/api/candidates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      alert('Candidate details submitted successfully');
      setFormData({ name: '', facilities: '', experience: '', manifesto: '', education: '' }); // Clear form
    } catch (error) {
      console.error('Error submitting candidate details:', error);
    }
  };

  return (
    <div>
      <h1>Candidate Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Facilities:</label>
          <input type="text" name="facilities" value={formData.facilities} onChange={handleChange} required />
        </div>
        <div>
          <label>Experience:</label>
          <input type="text" name="experience" value={formData.experience} onChange={handleChange} required />
        </div>
        <div>
          <label>Election Manifesto:</label>
          <textarea name="manifesto" value={formData.manifesto} onChange={handleChange} required />
        </div>
        <div>
          <label>Education:</label>
          <input type="text" name="education" value={formData.education} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CandidateDashboard;
