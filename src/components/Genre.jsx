import React from 'react';

const Genre = ({ isActiveGenre, selectedGenre, handleFilter }) => {
  const baseStyles =
    'flex justify-center items-center h-[3rem] w-[8rem] rounded-lg text-white font-bold mx-4 hover:cursor-pointer';
  const bgColor = isActiveGenre ? 'bg-blue-400' : 'bg-gray-400/50';
  return (
    <div
      onClick={() => handleFilter(selectedGenre)}
      className={`${baseStyles} ${bgColor}`}
    >
      {selectedGenre}
    </div>
  );
};

export default Genre;
