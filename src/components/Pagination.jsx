import React from 'react';

const Pagination = ({ pageNo, prevPageHandler, nextPageHandler }) => {
  return (
    <div className='bg-gray-400 p-4 h-[50px] w-full mt-8 flex justify-center gap-2'>
      <div onClick={prevPageHandler} className='px-8 hover:cursor-pointer'>
        <i className='fa-solid fa-arrow-left' aria-hidden='true'></i>
      </div>
      <div>{pageNo}</div>
      <div onClick={nextPageHandler} className='px-8 hover:cursor-pointer'>
        <i className='fa-solid fa-arrow-right' aria-hidden='true'></i>
      </div>
    </div>
  );
};

export default Pagination;
