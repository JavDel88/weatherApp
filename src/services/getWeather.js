import axios from "axios";

const getWeather = (lat, lon) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7db02ee52aeb100aae7598facd0b6951&units=metric&lang=es`
    // const URL = `http://api.weatherapi.com/v1/current.json?key=e7b1be4a0cd8440188d220030220104&q=${lat},${lon}`
    const res = axios.get(URL)
    return res
}

export default getWeather

