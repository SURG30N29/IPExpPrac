import React, { useState } from 'react';
import axios from 'axios';

const SalaryForm = () => {
  const [basicSalary, setBasicSalary] = useState('');
  const [netSalary, setNetSalary] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset errors

    try {
      const response = await axios.post('http://localhost:5000/calculate', {
        basicSalary: parseFloat(basicSalary),
      });
      setNetSalary(response.data.netSalary);
    } catch (err) {
      setError(err.response?.data?.error || 'Error calculating net salary');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Salary Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Basic Salary:</label>
          <input
            type="number"
            value={basicSalary}
            onChange={(e) => setBasicSalary(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', margin: '10px 0' }}
          />
        </div>
        <button type="submit">Calculate Net Salary</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {netSalary !== null && (
        <p>Your estimated net salary is: <strong>{netSalary}</strong></p>
      )}
    </div>
  );
};

export default SalaryForm;
