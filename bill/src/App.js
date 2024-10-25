// src/App.js
import React from 'react';
import './App.css';
import BillForm from './components/BillForm';

const App = () => {
    return (
        <div className="App">
            <h1>Bill Calculator</h1>
            <BillForm />
        </div>
    );
};

export default App;
