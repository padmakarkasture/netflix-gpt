import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constants";

export const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch()
    const getPlayingMovies = async ()=>{
    
      const response = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&page=1&sort_by=popularity.desc",OPTIONS);
        const data = await response.json();
        dispatch(addNowPlayingMovies(data))
    }
  
    useEffect(()=>{ getPlayingMovies()},[])
    
}