import { useEffect } from "react"
import getWeather from "../services/getWeather";


const WeatherManager = () => {
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            // const lat= position.coords.latitude
            // const lon= position.coords.longitude
            getWeather (/*lat, lon*/position.coords.latitude, position.coords.longitude)
                .then(response => {
                    console.log(response.data)
                })
                .catch(err => {
                    console.log(err)
                })

          });    

    }, [])



  return (
    <div>WeatherManager</div>    
  )
}

export default WeatherManager