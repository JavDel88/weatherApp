import { useEffect, useState } from "react"
import "./WeatherManager.css"
import getWeather from "../services/getWeather"
import WeatherCard from "../components/WeatherCard";


const WeatherManager = () => {

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [icon, setIcon] = useState('');
  const [description, setDescription] = useState('');
  const [temperature, setTemp] = useState(0)
  const [bgImg,setBgImg] = useState('');  
    
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const lon = position.coords.longitude
      getWeather(lat, lon)
        .then(response => {          
          setCity(response.data.name)
          setCountry(response.data.sys.country)
          setIcon(response.data.weather[0].icon)
          setDescription(response.data.weather[0].description)
          setTemp(response.data.main.temp)
          if (icon === '01d || 01n') {
            setBgImg('clearSky')
          }  else if (icon === '02d' || icon === '02n' || icon === '03d' || icon === '03n' || icon === '04d' || icon === '04n'){
            setBgImg('clouds')
          } else if (icon === '09d' || icon === '09n'){
            setBgImg('dizzled')
          } else if (icon === '10d' || icon === '10n'){
            setBgImg('rain')
          } else if (icon === '11d' || icon === '11n'){
            setBgImg('thunderStorm')
          } else if (icon === '13d' || icon === '13n'){
            setBgImg('snow')
          } else if (icon === '50d' || icon === '50n'){
            setBgImg('mist')
          }                           
        })
        .catch(err => {
          console.log(err)
        })
    });
  }, [icon])

  

  return (
    <div className={`WeatherManager ${bgImg}`}>
      <WeatherCard city={city} country={country} description={description} icon={icon} temperature={temperature} />
    </div>
  )
}

export default WeatherManager