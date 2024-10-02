import React from 'react';
import { IMG_CDN } from '../utils/constants';

const MovieCard = ({movie}) => {
  return (
    <div className='w-48 mx-2'>
        
        <img alt="Movie card" src={`${IMG_CDN}/${movie.poster_path}`}  />
    </div>
  )
}

export default MovieCard