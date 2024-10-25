import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS styles

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/calculate-bmi', {
        weight,
        height,
      });
      setResult(response.data);
    } catch (error) {
      alert('Please enter valid inputs');
    }
  };

  const getResultClass = () => {
    if (!result) return '';
    switch (result.category) {
      case 'Underweight':
        return 'result underweight';
      case 'Normal weight':
        return 'result normal';
      case 'Overweight':
        return 'result overweight';
      case 'Obesity':
        return 'result obesity';
      default:
        return '';
    }
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
        <button type="submit">Calculate</button>
      </form>

      {result && (
        <div className={getResultClass()}>
          <p>Your BMI: {result.bmi.toFixed(2)}</p>
          <p>Category: {result.category}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
