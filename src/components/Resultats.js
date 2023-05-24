import React, { useState, useEffect } from 'react'
import file from '../assets/data/data.json'

const Resultats = ({ data }) => {

    const formatedDate = new Date(data.dt * 1000).toLocaleString( "fr-Fr", { month: "short", day: "2-digit", year: "numeric"});

    const [celsius, setCelsius] = useState(true)

    const src = file.url + file.icons.days[data.weather[0].description];

    function KelvinToCelsius(value){
        return (value - 273,15).toFixed(2);
    }

    function KelvinToFahrenheit(value){
        return ((value - 273,15) * 9/5 + 32).toFixed(2);
    } 

    return (
        <div className="card" style={{ width: "18rem"}}>
            <img className="card-img-top" src={ src } alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{ data.name }</h5>
                <p className="card-text">Le { formatedDate }</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Température : { celsius ? KelvinToCelsius(data.main.temp) : KelvinToFahrenheit(data.main.temp) }{ celsius ? "°C" : "F"} <br/><button className='btn btn-info' onClick={ () => setCelsius(!celsius) }>{ celsius ? "Fahrenheit" : "Celsius" }</button></li>
                <li className="list-group-item">Vent : { data.wind.speed } m/s</li>
                <li className="list-group-item">Humidité :  { data.main.humidity } %</li>
            </ul>
        </div>
    )
}

export default Resultats