import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector(store=>store.movies);
    console.log("movies",movies)
  return (
   <div className='bg-black'>
   
   {/* Movielist
   popular
   trending

   
   */}
  <div className='-mt-80 relative z-30'>
  {movies.nowPlayingMovies && <MovieList  title={"Now playing"} movies={movies?.nowPlayingMovies?.results}/>}
   {movies.popularMovies && <MovieList  title={"Popular"} movies={movies?.popularMovies?.results}/>}
   {/* {movies && <MovieList  title={"Tv Shows"} movies={movies?.nowPlayingMovies?.results}/>}
   {movies && <MovieList  title={"Popular"} movies={movies?.nowPlayingMovies?.results}/>} */}
  </div>
   </div>
  )
}

export default SecondaryContainer