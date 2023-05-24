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
            <div className="row w-50 mx-auto">
                <b className="ps-0"><div id="status-label" className="float-start invalid-feedback mt-3 ps-0" style={{display: "block", textAlign: "left", fontSize: "110%"}}></div></b>
            </div>
            <div className="row w-50 mx-auto mt-1 ">
                <div className="col-9 mx-0 px-0">
                    <div className="form-floating w-100">
                        <input type="text" className="form-control" id="searchInput" placeholder="Entrez une ville" style={{borderTopRightRadius: "0", borderBottomRightRadius: "0"}} />
                        <label htmlFor="searchInput">Entrez une ville</label>
                    </div>
                </div>
                <div className="col-3 mx-0 px-0">
                    <button className="btn btn-outline-secondary w-100 h-100" style={{borderTopLeftRadius: "0", borderBottomLeftRadius: "0"}} onClick={ () => search()}>Rechercher</button>
                </div>
            </div>


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