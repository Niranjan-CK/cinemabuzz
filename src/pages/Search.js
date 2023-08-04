import { Card } from "../components"
import { useFetch } from "../hooks/useFetch"
import { useSearchParams } from "react-router-dom"
import { useTitle } from "../hooks/useTitle";


export const Search=({apiPath})=>{
    const [searchParam] = useSearchParams();
    const queryTerm = searchParam.get("q")

    const {data : movies} = useFetch(apiPath,queryTerm)
    useTitle(`Search result for ${queryTerm}`);
    
    return(
        <>
            <section className="max-w-7xl mx-auto py-7">
                <p className="text-3xl text-green-500 dark:text-white">
                    { movies.length === 0 ? `No result found for ${queryTerm}`:`Result for ${queryTerm}` }
                </p>
               <div className="flex justify-start flex-wrap other:justify-evenly">
                { movies &&
                    movies.map((movie)=>(
                        <Card key={movie.id} movie={movie}/>
                    ))
                }
                    
               </div>
            </section>
        </>
    )
}