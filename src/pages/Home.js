import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Resultats from '../components/Resultats'
import SearchBar from "../components/SearchBar";


function Home() {

    const [ville, setVille] = useState(null)
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState([true])
    
    useEffect(() => {
        fetchData()
    }, [ville])

    const fetchData = async () => {
        try {
            setVille("Maisons");
            const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=ded1b9ecb15b260174c41676490fb34b';
            const response = await axios.get(url)
            setData(response.data)
            console.log(data);
            setIsLoading(false);
        } catch (error) {
            console.error(error)
        }
    }
 
    return (
        <div>
            <h1>Météo :</h1>
            <SearchBar/>
            { isLoading ? null : <>
                <Resultats data={ data } />
            </>
            }
        </div>
    )
}
 
export default Home;