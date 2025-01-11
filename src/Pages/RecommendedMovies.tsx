// RecommendedMovies.tsx
import React from 'react';

const RecommendedMovies = ({ recommendedMovies, allMovies }) => {
  return (
    <div>
      <h2>Recommended Movies</h2>
      <ul>
        {recommendedMovies.map((movieId) => {
          const movie = allMovies.find((m) => m.id === movieId);
          return (
            <li key={movieId}>
              <h3>{movie.title}</h3>
              <p>Genre: {movie.genre.join(', ')}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecommendedMovies;