import { useEffect,useState } from "react";
export const useFetch=(apiPath)=>{
    const [data , setData ] = useState([])
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`
    useEffect(()=>{
            async function fetchData(){
                console.log(url)
                const response = await fetch(url)
                const data = await response.json()
                setData(data.results)
                console.log(data)

            }
            fetchData();
    },[url])
    return {data}
}