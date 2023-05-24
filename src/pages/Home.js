import React, { useState, useEffect } from 'react'
import Resultats from '../components/Resultats'
import SearchBar from "../components/SearchBar";
import axios from "axios";

function Home() {
    const [data, setData] = useState(null)
    const [file, setFile] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + data + "&appid=ded1b9ecb15b260174c41676490fb34b"
        fetchData(url)
    }, [data])

    const fetchData = async (url) => {
        try {
            const response = await axios.get(url)
            setFile(response.data);
            setIsLoading(false)
        } catch (error) {
            setIsLoading(true)
            setFile(null)
        }
    }
 
    return (
        <div>
            <h1>Météo :</h1>
            <SearchBar func={ setData }/>
            { isLoading ? null : <Resultats data={ file } />}
        </div>
    )
}
 
export default Home;