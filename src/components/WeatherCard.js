import { useState } from "react"
import "./WeatherCard.css"

const WeatherCard = ({city, country, icon, description, temperature, }) => {

    const[ isCelsius, setIsCelsius ] = useState(true);    

  return (
    <div className="WeatherCard">
        <h2 className="Location">{city}, {country}</h2>
        <p>Tipo de clima: <br></br>{description}</p>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Weather Icon" />
        <p className="Temperature">{isCelsius ? temperature+" °C" : ((temperature* 9/5)+32).toFixed(2)+" °F"}</p>
        <button className="ChangeBtn" onClick={()=>{setIsCelsius(!isCelsius)}}>{isCelsius? "Cambiar a °F" : "Cambiar a °C" }</button>
    </div>
  )
}

export default WeatherCard
