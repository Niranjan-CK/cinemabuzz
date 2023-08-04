import { Route , Routes } from "react-router-dom";
import { MovieList , MovieDetails , PageNotFound , Search } from "../pages";

export const AllRoutes =()=>{
    return(
        <>
           <main className="dark:bg-slate-800">
            <Routes>
                    <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home"/>}/>
                    <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular"/>}/>
                    <Route path="movies/top" element={<MovieList apiPath="movie/top_rated" title="Top rated"/>}/>
                    <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming"/>}/>
                    <Route path="movie/:id" element={<MovieDetails/>}/>
                    <Route path="Search" element={<Search apiPath="search/movie" title="Search"/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
            </Routes>
           </main>

        </>
    )
}