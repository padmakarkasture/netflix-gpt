import React from 'react';
import { useSelector } from 'react-redux';
import useTrailerShow from '../hooks/useTrailerShow';

const VideoBackground = ({ movieId }) => {
    useTrailerShow(movieId)
    const trailerDetails = useSelector(store => store.movies?.trailerVideo);
    return (
        <div className='w-screen relative'>
            <iframe 
            // width="200"
            className='w-screen aspect-video'
                // height="315"
                src={`https://www.youtube.com/embed/${trailerDetails?.key}?autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
        </div>
    )
}

export default VideoBackground