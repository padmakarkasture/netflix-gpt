import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store=>store.movies?.nowPlayingMovies);
   if(!movies){
   return null;
   }
   const mainMovie = movies.results[0]
   const {original_title, overview} =mainMovie
  return (
   <>
   <VideoTitle title={original_title} overview={overview} />
   <VideoBackground movieId={mainMovie.id} />
   
   </>
  )
}

export default MainContainer