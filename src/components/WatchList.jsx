import React, { useEffect, useState } from 'react';
import { genreIds } from '../utility/Constants';
import Genre from './Genre';
import Search from './Search';
import WatchListTable from './WatchListTable';

const WatchList = () => {
  const [watchlist, setWatchList] = useState([]);
  const [sortOrder, setSortOrder] = useState();
  const [search, setSearch] = useState('');
  const [genreList, setGenreList] = useState([
    'All Genres',
    'Thriller',
    'Action',
  ]);
  const [currGenre, setCurrGenre] = useState('All Genres');

  useEffect(() => {
    const moviefromLocalStorage = localStorage.getItem('movies');
    if (moviefromLocalStorage) {
      setWatchList(JSON.parse(moviefromLocalStorage));
    }
  }, []);

  useEffect(() => {
    let temp = watchlist.map((movie) => {
      return getGenre(movie.genre_ids[0]);
    });
    temp = new Set(temp);
    setGenreList(['All Genres', ...temp]);
  }, [watchlist]);

  const getGenre = (genere_id) => {
    return genreIds[genere_id];
  };

  const handleSortingOrder = (actionType, property) => {
    setSortOrder(actionType);
    if (actionType === 'asc') {
      const sortAsc = watchlist.sort((mA, mB) => {
        return mA[property] - mB[property];
      });
      setWatchList([...sortAsc]);
    } else {
      const sortDesc = watchlist.sort((mA, mB) => {
        return mB[property] - mA[property];
      });
      setWatchList([...sortDesc]);
    }
  };

  const searchInputHandler = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };
  return (
    <>
      <div className='flex justify-center m-4'>
        {genreList.map((genre) => {
          const isActive = currGenre.includes(genre);
          return (
            <Genre
              key={genre}
              isActiveGenre={isActive}
              selectedGenre={genre}
              handleFilter={handleFilter}
            />
          );
        })}
      </div>
      <div className='flex justify-center my-10'>
        <Search searchValue={search} searchInputHandler={searchInputHandler} />
      </div>
      <div className='overflow-hidden rounded-lg border border-gray-200 shadow-md m-5'>
        <WatchListTable
          sortOrder={sortOrder}
          handleSortingOrder={handleSortingOrder}
          watchlist={watchlist}
          currGenre={currGenre}
          getGenre={getGenre}
          search={search}
        />
      </div>
    </>
  );
};
export default WatchList;
