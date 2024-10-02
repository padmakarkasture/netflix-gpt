import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constants";

export const usePopularMovies = ()=>{
    const dispatch = useDispatch()
    const getPlayingMovies = async ()=>{
    
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',OPTIONS);
        const data = await response.json();
        console.log("data")
        dispatch(addPopularMovies(data))
    }
  
    useEffect(()=>{ getPlayingMovies()},[])
    
}