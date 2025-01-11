// storage.js
const storage = {
  getFavorites: () => JSON.parse(localStorage.getItem('favorites')) || [],
  setFavorites: (favorites) => localStorage.setItem('favorites', JSON.stringify(favorites)),
  getRatings: () => {
    const ratings = localStorage.getItem('ratings');
    return ratings ? JSON.parse(ratings) : [];
  },
  setRatings: (ratings) => localStorage.setItem('ratings', JSON.stringify(ratings)),
  getWatchlist: () => JSON.parse(localStorage.getItem('watchlist')) || [],
  setWatchlist: (watchlist) => localStorage.setItem('watchlist', JSON.stringify(watchlist)),
};

export default storage;