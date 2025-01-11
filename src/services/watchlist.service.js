// src/services/watchlist.service.js
import api from '../api';  // Assuming you have an API module for server-side interactions
import storage from '../utils/storage';  // Assuming you have a utility for localStorage management

class WatchlistService {
  // Fetch the watchlist from localStorage or API
  static getWatchlist() {
    try {
      // Try to fetch the watchlist from localStorage
      const storedWatchlist = storage.getWatchlist();
      
      // If there is a watchlist in localStorage, return it
      if (storedWatchlist && Array.isArray(storedWatchlist) && storedWatchlist.length > 0) {
        return storedWatchlist;
      }

      // If no watchlist is in localStorage, fetch from API
      return api.getWatchlist();
    } catch (error) {
      console.error("Error fetching the watchlist:", error);
      return [];
    }
  }

  // Add movie to the watchlist
  static addToWatchlist(movie) {
    try {
      // Fetch current watchlist from localStorage
      const watchlist = storage.getWatchlist();

      // Check if the movie is already in the watchlist to avoid duplicates
      if (!watchlist.some(item => item.id === movie.id)) {
        watchlist.push(movie);
        storage.setWatchlist(watchlist);  // Update the localStorage

        // Optionally, call the API to persist the movie on the server
        api.addMovieToWatchlist(movie.id);
        console.log(`Movie added to watchlist: ${movie.title}`);
      }
    } catch (error) {
      console.error("Error adding movie to watchlist:", error);
    }
  }

  // Remove movie from the watchlist
  static removeFromWatchlist(movieId) {
    try {
      // Fetch current watchlist from localStorage
      const watchlist = storage.getWatchlist();

      // Filter out the movie to be removed
      const updatedWatchlist = watchlist.filter(movie => movie.id !== movieId);
      
      // Update the localStorage with the new list
      storage.setWatchlist(updatedWatchlist);

      // Optionally, call the API to remove the movie from the server-side watchlist
      api.removeMovieFromWatchlist(movieId);
      console.log(`Movie with ID: ${movieId} removed from watchlist.`);
    } catch (error) {
      console.error("Error removing movie from watchlist:", error);
    }
  }

  // Optionally, sync localStorage watchlist with API
  static syncWatchlistWithAPI() {
    try {
      const watchlist = storage.getWatchlist();
      // Sync localStorage watchlist with API if needed
      if (watchlist && watchlist.length > 0) {
        api.syncWatchlist(watchlist);
      }
    } catch (error) {
      console.error("Error syncing watchlist with API:", error);
    }
  }
}

export default WatchlistService;
