/*import axios from "axios";

const API_KEY = "0d62be90cc24bf3a77723ca6481b2320";
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// Create a reusable axios instance
const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// Fetch popular movies
export const fetchPopularMovies = async () => {
  try {
    const response = await tmdbApi.get("/movie/popular");
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await tmdbApi.get("/trending/movie/day");
    return response.data.results;
  } catch (error) {
    console.error("Error fetching trending movies:", error.message);
    return [];
  }
};

// Search for a movie by name
export const searchMovies = async (query) => {
  try {
    const response = await tmdbApi.get("/search/movie", {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};

// Fetch movie details by ID
export const getMovieDetails = async (movieId) => {
  try {
    const response = await tmdbApi.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

// Fetch actor details by ID
export const getActorDetails = async (actorId) => {
  try {
    const response = await tmdbApi.get(`/person/${actorId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching actor details:", error);
    return null;
  }
};

// Fetch actor's movie credits by ID
export const getActorMovies = async (actorId) => {
  try {
    const response = await tmdbApi.get(`/person/${actorId}/movie_credits`);
    return response.data.cast;
  } catch (error) {
    console.error("Error fetching actor's movie credits:", error);
    return [];
  }
};
export const getActorAwards = async (actorId) => {
  try {
    const response = await tmdbApi.get(`/person/${actorId}/awards`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching actor's awards:", error);
    return [];
  }
};

// Fetch upcoming movies
export const fetchUpcomingMovies = async () => {
  try {
    const response = await tmdbApi.get("/movie/upcoming");
    return response.data.results;
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    return [];
  }
};*/
import axios from "axios";

const API_KEY = "0d62be90cc24bf3a77723ca6481b2320";
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

// Create a reusable axios instance
const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

// Fetch popular movies
export const fetchPopularMovies = async () => {
  try {
    const response = await tmdbApi.get("/movie/popular");
    return response.data.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      rating: movie.vote_average,
      image: movie.poster_path
        ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`
        : "/placeholder-image.png", // Fallback image
      year: new Date(movie.release_date).getFullYear(),
      genre: movie.genre_ids || [],
    }));
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await tmdbApi.get("/trending/movie/day");
    return response.data.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      rating: movie.vote_average,
      image: movie.poster_path
        ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`
        : "/placeholder-image.png", // Fallback image
      year: new Date(movie.release_date).getFullYear(),
      genre: movie.genre_ids || [],
    }));
  } catch (error) {
    console.error("Error fetching trending movies:", error.message);
    return [];
  }
};
// Search for a movie by name
export const searchMovies = async (query) => {
  try {
    const response = await tmdbApi.get("/search/movie", {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};

// Fetch movie details by ID
export const getMovieDetails = async (movieId) => {
  try {
    const response = await tmdbApi.get(/movie/$,{movieId}); 
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

// Fetch actor details by ID
export const getActorDetails = async (actorId) => {
  try {
    const response = await tmdbApi.get(/person/$,{actorId});
    return response.data;
  } catch (error) {
    console.error("Error fetching actor details:", error);
    return null;
  }
};

// Fetch actor's movie credits by ID
export const getActorMovies = async (actorId) => {
  try {
    const response = await tmdbApi.get(/person/$,{actorId}/movie_credits);
    return response.data.cast;
  } catch (error) {
    console.error("Error fetching actor's movie credits:", error);
    return [];
  }
};
export const getActorAwards = async (actorId) => {
  try {
    const response = await tmdbApi.get(/person/$,{actorId}/awards);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching actor's awards:", error);
    return [];
  }
};

// Fetch upcoming movies
export const fetchUpcomingMovies = async () => {
  try {
    const response = await tmdbApi.get("/movie/upcoming");
    return response.data.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      rating: movie.vote_average,
      image: movie.poster_path
        ? `${TMDB_IMAGE_BASE_URL}${movie.poster_path}`
        : "/placeholder-image.png", // Fallback image
      year: new Date(movie.release_date).getFullYear(),
      genre: movie.genre_ids || [],
    }));
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    return [];
  }
};

// Other functions (e.g., searchMovies, getMovieDetails, etc.) remain the same.
