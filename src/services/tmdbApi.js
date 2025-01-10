import axios from "axios";

const API_KEY = "0d62be90cc24bf3a77723ca6481b2320";
const BASE_URL = "https://api.themoviedb.org/3";

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
