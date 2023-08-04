import { Route , Routes } from "react-router-dom";
import { MovieList , MovieDetails , PageNotFound , Search } from "../pages";

export const AllRoutes =()=>{
    return(
        <>
           <Routes>
                <Route path="/" element={<MovieList/>}/>
                <Route path="movies/popular" element={<MovieList/>}/>
                <Route path="movies/top" element={<MovieList/>}/>
                <Route path="movies/upcoming" element={<MovieList/>}/>
                <Route path="movie/:id" element={<MovieDetails/>}/>
                <Route path="Search" element={<Search/>}/>
                <Route path="*" element={<PageNotFound/>}/>
           </Routes>

        </>
    )
}