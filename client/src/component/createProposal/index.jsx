import React, { useState } from 'react';
import axios from 'axios';

const CreateProposal = () => {
  const [formData, setFormData] = useState({
    requirement: '',
    offering: '',
    eligibility: '',
    description: '',
    status: 'Open', 
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token'); 

      if (!token) {
        alert('User not logged in.');
        return;
      }

      const res = await axios.post(
        'http://localhost:5000/api/proposals',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );

      alert('Proposal submitted successfully!');
      setFormData({
        requirement: '',
        offering: '',
        eligibility: '',
        description: '',
        status: 'Open',
      });
    } catch (err) {
      console.error('Error submitting proposal:', err);
      alert('Failed to submit proposal.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>📥 Create New Proposal</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Requirement:</label><br />
          <input
            type="text"
            name="requirement"
            value={formData.requirement}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Offering:</label><br />
          <input
            type="text"
            name="offering"
            value={formData.offering}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Eligibility:</label><br />
          <input
            type="text"
            name="eligibility"
            value={formData.eligibility}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label><br />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
        <button type="submit">Submit Proposal</button>
      </form>
    </div>
  );
};

export default CreateProposal;
