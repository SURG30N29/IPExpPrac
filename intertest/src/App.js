import React, { useState } from 'react';

const App = () => {
  const [principal, setPrincipal] = useState('');
  const [investmentPeriod, setInvestmentPeriod] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/calculate-interest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        principal: parseFloat(principal),
        investmentPeriod: parseInt(investmentPeriod),
        interestRate: parseFloat(interestRate),
      }),
    });

    if (response.ok) {
      const data = await response.json();
      setResult(data);
    } else {
      console.error('Error in response:', response);
    }
  };

  return (
    <div className="App">
      <h1>Savings Interest Calculator</h1>
      <form onSubmit={handleCalculate}>
        <label>
          Principal Amount:
          <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} required />
        </label>
        <label>
          Investment Period (in years):
          <input type="number" value={investmentPeriod} onChange={(e) => setInvestmentPeriod(e.target.value)} required />
        </label>
        <label>
          Rate of Interest (%):
          <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} required />
        </label>
        <button type="submit">Calculate</button>
      </form>
      {result && (
        <div>
          <h2>Interest Earned: ${result.interestEarned ? result.interestEarned.toFixed(2) : 0}</h2>
          <h2>Total Amount: ${result.totalAmount ? result.totalAmount.toFixed(2) : 0}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
