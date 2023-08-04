import { Route , Routes } from "react-router-dom";
import { MovieList , MovieDetails , PageNotFound , Search } from "../pages";

export const AllRoutes =()=>{
    return(
        <>
           <main className="dark:bg-slate-800">
            <Routes>
                    <Route path="/" element={<MovieList apiPath="movie/now_playing"/>}/>
                    <Route path="movies/popular" element={<MovieList apiPath="movie/popular"/>}/>
                    <Route path="movies/top" element={<MovieList apiPath="movie/top_rated"/>}/>
                    <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming"/>}/>
                    <Route path="movie/:id" element={<MovieDetails/>}/>
                    <Route path="Search" element={<Search/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
            </Routes>
           </main>

        </>
    )
}