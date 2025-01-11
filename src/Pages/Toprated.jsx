import { Star, Trophy } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

const Toprated = () => {
  // Define state for movies and loading status
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch top-rated movies from TMDB API
  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=0d62be90cc24bf3a77723ca6481b2320&language=en-US&page=1`
        );
        setMovies(response.data.results); // Set the fetched movies
        setLoading(false); // Set loading state to false
      } catch (error) {
        console.error("Error fetching top-rated movies:", error);
        setLoading(false); // Set loading state to false in case of error
      }
    };

    fetchTopRatedMovies();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-8"
      >
        <Trophy className="w-8 h-8 text-yellow-500" />
        <h1 className="text-3xl font-bold">Top Rated Movies</h1>
      </motion.div>
      <div className="space-y-6">
        {movies.map((movie, index) => (
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link to={`/movie/${movie.id}`}>
              <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex">
                  <div className="w-16 bg-yellow-500 flex items-center justify-center text-black font-bold text-xl">
                    #{index + 1} {/* Use index as the rank */}
                  </div>
                  <div className="relative w-48">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {movie.title}
                      </h2>
                      <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {movie.vote_average}
                        </span>
                      </div>
                    </div>
                    <div className="text-gray-400 dark:text-gray-200">
                      <span>{movie.release_date.split("-")[0]}</span>
                      <span className="mx-2">•</span>
                      <span>{movie.vote_count} votes</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Toprated;
