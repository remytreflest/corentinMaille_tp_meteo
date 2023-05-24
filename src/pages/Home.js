import React, { useState, useEffect } from 'react'
import Resultats from '../components/Resultats'
import SearchBar from "../components/SearchBar";

function Home() {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        console.log(data)
        console.log(isLoading)
        data == [] ? setIsLoading(true) : setIsLoading(false);
    }, [data])
 
    return (
        <div>
            <h1>Météo :</h1>
            <SearchBar func={ setData }/>
            { isLoading ? null : <><Resultats data={ data } /></> }
        </div>
    )
}
 
export default Home;