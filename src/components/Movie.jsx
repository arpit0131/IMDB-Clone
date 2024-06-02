import React from 'react';
import { IMAGE_URL } from '../utility/Constants';

const Movie = ({ movie, isFavorite, onFavoriteChange }) => {
  const toggleFavorite = () => {
    const newFavoriteStatus = !isFavorite;
    onFavoriteChange(movie, newFavoriteStatus); // Notify parent of favorite change
  };

  return (
    <div
      className='relative h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col'
      style={{
        backgroundImage: `url(${IMAGE_URL}/${movie.backdrop_path})`,
      }}
    >
      <div className='absolute top-2 right-2 text-2xl text-white'>
        <i
          className={`fa-heart ${isFavorite ? 'fas text-red-400' : 'far'}`} //Heart icon
          onClick={toggleFavorite}
        ></i>
      </div>
      <div className='text-white w-full h-[60px] text-center text-xl p-1 rounded bg-gray-500 mt-auto'>
        {movie.original_title}
      </div>
    </div>
  );
};

export default Movie;
