import React, { useState, useEffect } from "react";
import axios from "axios";
import { Play, Star, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const TMDB_API_KEY = "0d62be90cc24bf3a77723ca6481b2320";
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Hero = () => {
  const [featuredMovies, setFeaturedMovies] = useState<any[]>([]);
  const [currentMovie, setCurrentMovie] = useState(0);

  useEffect(() => {
    // Fetch featured movies (e.g., "now_playing" or "popular" movies)
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `${TMDB_BASE_URL}/movie/now_playing`,
          {
            params: {
              api_key: TMDB_API_KEY,
              language: "en-US",
              page: 1,
            },
          }
        );

        const movies = response.data.results.map((movie: any) => ({
          id: movie.id,
          title: movie.title,
          rating: movie.vote_average,
          releaseDate: new Date(movie.release_date).toLocaleDateString(),
          description: movie.overview,
          image: `${TMDB_IMAGE_BASE_URL}${movie.backdrop_path || movie.poster_path}`,
        }));

        setFeaturedMovies(movies.slice(0, 5)); // Limit to top 5 movies
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMovie((prev) => (prev + 1) % featuredMovies.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [featuredMovies]);

  if (featuredMovies.length === 0) {
    return (
      <div className="flex items-center justify-center h-[90vh] bg-black text-white">
        <p>Loading...</p>
      </div>
    );
  }

  const movie = featuredMovies[currentMovie];

  return (
    <div className="relative h-[90vh] bg-gradient-to-b from-transparent to-black">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 gradient-mask"
        style={{
          backgroundImage: `url('${movie.image}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      </div>

      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-yellow-500 font-semibold">
                {movie.rating} Rating
              </span>
            </div>
            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full">
              <Calendar className="w-5 h-5 text-zinc-400" />
              <span className="text-zinc-300">{movie.releaseDate}</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-glow">
            {movie.title}
          </h1>
          <p className="text-zinc-300 text-lg mb-8 line-clamp-3 max-w-xl">
            {movie.description}
          </p>
          <div className="flex items-center gap-4">
            <Link
              to={`/movie/${movie.id}`}
              className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-yellow-400 transition-all hover:scale-105 duration-300"
            >
              <Play className="w-5 h-5" />
              Watch Trailer
            </Link>
            <Link
              to={`/movie/${movie.id}`}
              className="bg-zinc-900/80 backdrop-blur-md text-white px-8 py-3 rounded-xl font-semibold hover:bg-zinc-800 transition-all hover:scale-105 duration-300"
            >
              More Info
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 right-4 flex gap-2">
          {featuredMovies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentMovie(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentMovie === index
                  ? "bg-yellow-500 w-8"
                  : "bg-zinc-600 w-4 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
