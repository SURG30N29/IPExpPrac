// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/questions')
      .then(response => setQuestions(response.data))
      .catch(error => console.error('Error fetching questions:', error));
  }, []);

  const handleOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      {showResults ? (
        <div className="result">
          <h2>Your Score: {score} / {questions.length}</h2>
        </div>
      ) : (
        questions.length > 0 && (
          <div className="question-box">
            <h3 className="question">{questions[currentQuestion].question}</h3>
            <div className="button-container">
              {questions[currentQuestion].options.map((option) => (
                <button 
                  key={option} 
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default App;
