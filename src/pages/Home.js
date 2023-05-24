import React, { useState, useEffect } from 'react'
import Resultats from '../components/Resultats'
import SearchBar from "../components/SearchBar";
import axios from "axios";
import json from '../assets/data/data.json'

function Home() {
    const [data, setData] = useState(null)
    const [file, setFile] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + data + "&appid=" + json.apikey
        fetchData(url)
    }, [data])

    const fetchData = async (url) => {

        if(data == null || data == "")
            return;

        try {
            document.querySelector("#status-label").textContent = "";
            const response = await axios.get(url)
            setFile(response.data);
            setIsLoading(false)
        } catch (error) {
            document.querySelector("#status-label").textContent = "La ville saisie n'existe pas";
            setIsLoading(true)
            setFile(null)
        }
    }
 
    return (
        <div className="sub-main">
            <h1>Météo :</h1>
            <SearchBar func={ setData }/>
            { isLoading ? null : <Resultats data={ file } />}
        </div>
    )
}
 
export default Home;