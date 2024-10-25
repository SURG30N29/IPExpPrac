import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import './App.css';

// Home component to display the list of movies in card format
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/movies')
      .then((response) => setMovies(response.data))
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div className="movie-list">
      <h1>Movie List</h1>
      <div className="card-container">
        {movies.map((movie) => (
          <div className="card" key={movie.id}>
            <img src="https://via.placeholder.com/150" alt={movie.title} />
            <h3>
              <Link to={`/movies/${movie.id}`}>{movie.title} ({movie.year})</Link>
            </h3>
            <p>{movie.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// MovieDetails component to display details of a specific movie
const MovieDetails = ({ id }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/movies')
      .then((response) => {
        const movieData = response.data.find((m) => m.id === parseInt(id));
        setMovie(movieData);
      })
      .catch((error) => console.error('Error fetching movie:', error));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details">
      <div className="card">
        <img src="https://via.placeholder.com/300" alt={movie.title} />
        <h2>{movie.title} ({movie.year})</h2>
        <div className="description-container">
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p>{movie.description}</p>
        </div>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

// MovieDetailsWrapper component to extract the ID from the URL
const MovieDetailsWrapper = () => {
  const { id } = useParams(); // Use useParams to get the ID from the URL
  return <MovieDetails id={id} />;
};

// Main App component
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" element={<MovieDetailsWrapper />} />
    </Routes>
  </Router>
);

export default App;
