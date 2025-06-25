import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/proposals/');
      setData(res.data);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2> Proposals</h2>
      <button onClick={navigate('/proposal/create')}>Create Proposal</button>
      <ul>
        {data.map((item) => (
          <li key={item._id}>
            <h4>{item.requirement}</h4>
            <p><strong>Offering:</strong> {item.offering}</p>
            <p><strong>Eligibility:</strong> {item.eligibility}</p>
            <p><strong>Status:</strong> {item.status}</p>
            <button onClick={() => navigate(`/proposal/${item._id}`)}>Read More</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
