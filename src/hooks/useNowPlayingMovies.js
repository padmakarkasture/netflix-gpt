import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constants";

export const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch()
    const getPlayingMovies = async ()=>{
    
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",OPTIONS);
        const data = await response.json();
        dispatch(addNowPlayingMovies(data))
    }
  
    useEffect(()=>{ getPlayingMovies()},[])
    
}