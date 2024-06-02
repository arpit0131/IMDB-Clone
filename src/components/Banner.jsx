import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, LANGUAGE, API_KEY, IMAGE_URL } from '../utility/Constants';

const Banner = () => {
  const [bannerPic, setBannerPic] = useState(null);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}?api_key=${API_KEY}&language=${LANGUAGE}&page=1`
        );
        setBannerPic(
          `${IMAGE_URL}/${response.data.results[0].backdrop_path}`
        );
        setTitle(response.data.results[0].original_title);
      } catch (err) {
        console.log('Error: ', err);
      }
    };
    fetchMovies();
  }, []);
  return (
    <div
      className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end'
      style={{
        backgroundImage: `url(${bannerPic})`,
      }}
    >
      <div className='text-white w-full text-center text-2xl'>{title}</div>
    </div>
  );
};

export default Banner;
