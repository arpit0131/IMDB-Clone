import React from 'react';

const WatchListTable = ({
  sortOrder,
  handleSortingOrder,
  watchlist,
  currGenre,
  getGenre,
  search,
}) => {
  return (
    <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
      <thead>
        <tr className='bg-gray-50'>
          <th className='px-6 py-4 font-medium text-gray-900'>Name</th>
          <th>
            <div className='flex align-middle'>
              Ratings
              {sortOrder !== 'asc' ? (
                <i
                  onClick={() => handleSortingOrder('asc', 'vote_average')}
                  className='fa-solid fa-arrow-up mx-1 hover:cursor-pointer'
                ></i>
              ) : (
                <i
                  onClick={() => handleSortingOrder('desc', 'vote_average')}
                  className='fa-solid fa-arrow-down mx-1 hover:cursor-pointer'
                ></i>
              )}
            </div>
          </th>
          <th>
            <div className='flex align-middle'>
              Popularity
              {sortOrder !== 'asc' ? (
                <i
                  onClick={() => handleSortingOrder('asc', 'popularity')}
                  className='fa-solid fa-arrow-up mx-1 hover:cursor-pointer'
                ></i>
              ) : (
                <i
                  onClick={() => handleSortingOrder('desc', 'popularity')}
                  className='fa-solid fa-arrow-down mx-1 hover:cursor-pointer'
                ></i>
              )}
            </div>
          </th>
          <th>
            <div className='flex'>
              <div>Genre</div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
        {watchlist.length > 0 &&
          watchlist
            .filter((movie) => {
              if (currGenre.includes('All Genres')) {
                return true;
              } else {
                return getGenre(movie.genre_ids[0]) === currGenre;
              }
            })
            .filter((movie) => {
              return movie.title.toLowerCase().includes(search.toLowerCase());
            })
            .map((movie) => (
              <tr className='hover:bg-gray-50' key={movie.id}>
                <td className='flex items-center px-6 py-4 font-normal text-gray-900 gap-4'>
                  <img
                    className='h-[6rem] w-[10rem] object-fit object-cover rounded-r-lg'
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt=''
                  />
                  <div className='font-medium text-gray-700 text-sm'>
                    {movie.title}
                  </div>
                </td>
                <td className='pl-6 py-4'>{movie.vote_average}</td>
                <td className='pl-6 py-4'>{movie.popularity}</td>
                <td className='pl-2 py-4'>{getGenre(movie.genre_ids[0])}</td>
              </tr>
            ))}
      </tbody>
    </table>
  );
};

export default WatchListTable;
