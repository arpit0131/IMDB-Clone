import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import Pagination from './Pagination';
import axios from 'axios';
import paginationSlice from '../redux/paginationSlice';
import { BASE_URL, API_KEY, LANGUAGE } from '../utility/Constants';
import { useDispatch, useSelector } from 'react-redux';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const { pageNo } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}&language=${LANGUAGE}&page=${pageNo}`)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }, [pageNo]);

  useEffect(() => {
    const localStorageMovies = JSON.parse(localStorage.getItem('movies'));
    if (localStorageMovies) {
      setWatchlist(localStorageMovies);
    }
  }, []);

  useEffect(() => {
    console.log('My Watchlist: ', watchlist);
  }, [watchlist]); // Log watchlist whenever it changes

  const favoriteChangeHandler = (movie, isFavorite) => {
    if (isFavorite) {
      // Add movie to watchlist
      setWatchlist((prevWatchlist) => {
        const updatedWatchlist = [...prevWatchlist, movie];
        localStorage.setItem('movies', JSON.stringify(updatedWatchlist));
        return updatedWatchlist;
      });
    } else {
      // Remove movie from watchlist
      setWatchlist((prevWatchlist) => {
        const updatedWatchlist = prevWatchlist.filter(
          (watchListMovie) => watchListMovie.id !== movie.id
        );
        localStorage.setItem('movies', JSON.stringify(updatedWatchlist));
        return updatedWatchlist;
      });
    }
  };

  const nextPageHandler = () => {
    console.log(paginationSlice);
    dispatch(paginationSlice.actions.nextPageHandler());
  };

  const prevPageHandler = () => {
    dispatch(paginationSlice.actions.prevPageHandler());
  };

  return (
    <>
      <div className='text-2xl font-bold text-center m-5'>Trending Movies</div>
      <div className='flex justify-evenly flex-wrap gap-8'>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            isFavorite={watchlist.some(
              (watchlistMovie) => watchlistMovie.id === movie.id
            )}
            onFavoriteChange={favoriteChangeHandler}
          />
        ))}
      </div>
      <Pagination
        pageNo={pageNo}
        prevPageHandler={prevPageHandler}
        nextPageHandler={nextPageHandler}
      />
    </>
  );
};

export default Movies;
