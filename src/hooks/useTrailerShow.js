import  {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import { OPTIONS } from '../utils/constants';

const useTrailerShow = (movieId) => {
    const dispatch = useDispatch()
    const getMovieVideos =async ()=>{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,OPTIONS);
        const data = await response.json();
        const trailers = data.results.filter((vid)=>vid.type==="Trailer");
        const trailer = trailers.length? trailers[0]:data.results[0]
        dispatch(addTrailerVideo(trailer))
    
    }
    useEffect(()=>{getMovieVideos()},[])
  
}

export default useTrailerShow