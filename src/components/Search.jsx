import React from 'react';

const Search = ({ searchValue, searchInputHandler }) => {
  return (
    <>
      <input
        type='text'
        placeholder='Search Movie'
        value={searchValue}
        onChange={searchInputHandler}
        className='h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none border border-gray-400'
      />
    </>
  );
};

export default Search;
