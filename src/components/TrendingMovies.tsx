/*import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the type for a movie
interface Movie {
    id: number;
    title: string;
    poster: string;
}

const TrendingMovies: React.FC = () => {
    // Sample movie data
    const movies: Movie[] = [
        { id: 1, title: "Movie 1", poster: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&w=800&q=80" },
        { id: 2, title: "Movie 2", poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80" },
        { id: 3, title: "Movie 3", poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80" },
        { id: 4, title: "Movie 4", poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=800&q=80" },
        { id: 5, title: "Movie 5", poster: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=800&q=80" },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Shows 4 movies at a time
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: <button type="button" className="slick-prev">Previous</button>, // Custom previous arrow
        nextArrow: <button type="button" className="slick-next">Next</button>,       // Custom next arrow
    };

    return (
        <div className="trending-movies">
            <h2>Trending Movies</h2>
            <Slider {...settings}>
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <img src={movie.poster} alt={movie.title} />
                        <h3>{movie.title}</h3>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TrendingMovies;*/

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the type for a movie
interface Movie {
    id: number;
    title: string;
    poster: string;
}

const TrendingMovies: React.FC = () => {
    // Sample movie data
    const movies: Movie[] = [
        { id: 1, title: "Movie 1", poster: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&w=800&q=80" },
        { id: 2, title: "Movie 2", poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80" },
        { id: 3, title: "Movie 3", poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80" },
        { id: 4, title: "Movie 4", poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&w=800&q=80" },
        { id: 5, title: "Movie 5", poster: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=800&q=80" },

    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Shows 4 movies at a time
        slidesToScroll: 1, // Scrolls 1 movie at a time
        autoplay: true,
        prevArrow: <button type="button" className="slick-prev">Previous</button>, // Custom previous arrow
        nextArrow: <button type="button" className="slick-next">Next</button>,       // Custom next arrow
    };

    return (
        <div className="trending-movies">
            <h2>Trending Movies</h2>
            <Slider {...settings}>
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <img src={movie.poster} alt={movie.title} />
                        <h3>{movie.title}</h3>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TrendingMovies;


