import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div className='px-8 '>
            <h1 className='text-2xl py-6 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll'>
                {movies.map(movie => {

                    return (<div key={movie.id}>
                        <div>   <MovieCard movie={movie} /></div>
                    </div>)

                })}
            </div>
        </div>
    )
}

export default MovieList