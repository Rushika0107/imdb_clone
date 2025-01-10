// src/services/watchlist.service.js
import api from '../api';
import storage from '../utils/storage';


class WatchlistService {
  getWatchlist() {
    return api.getWatchlist();
  }

  addMovieToWatchlist(movieId) 
  {
    api.addMovieToWatchlist(movieId);
    const watchlist = storage.getWatchlist();
    const index = watchlist.indexOf(movieId);
    if (index !== -1) {
      watchlist.splice(index, 1);
   }
  }
  removeMovieFromWatchlist(movieId) 
  {
    api.removeMovieFromWatchlist(movieId);
    const watchlist = storage.getWatchlist();
    const index = watchlist.indexOf(movieId);
    if (index !== -1) {
      watchlist.splice(index, 1);
  }
  storage.setWatchlist(watchlist);
 }
}
export default WatchlistService;