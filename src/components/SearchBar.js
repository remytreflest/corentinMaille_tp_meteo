import {useEffect, useState} from "react";
import axios from "axios";


const SearchBar = ({ func }) => {
    const [city, setCity] = useState(null)

    function search() {
        let cityToSearch = document.querySelector("#searchInput").value;
        setCity(cityToSearch);
    }

    useEffect(() => {
        let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ded1b9ecb15b260174c41676490fb34b"

        // data fetching here
        if (city != null)
            fetchData(url);
    },
    // Is triggered when city value change
    [city]);

    const fetchData = async (url) => {
        try {
            document.querySelector("#status-label").textContent = "";
            const response = await axios.get(url)
            func(city);
            console.log(response)
        } catch (error) {
            func(null);
            document.querySelector("#status-label").textContent = "La ville saisie n'existe pas";
        }
    }

    return (
        <>
            <div className="form-floating mb-3 w-50 mx-auto">
                <input type="text" className="form-control" id="searchInput" placeholder="Entrez une ville" />
                <label htmlFor="searchInput">Entrez une ville</label>
            </div>

            <button className="btn btn-outline-primary" onClick={ () => search()}>Rechercher</button>

            <h3 id="status-label" className="text-center"></h3>
        </>
    )


    // create component

    // get searchBar value 'city'

    // make call to weather api with 'city' param

    // fetch data

    // send data to parent

    // send city name to parent

}

export default SearchBar