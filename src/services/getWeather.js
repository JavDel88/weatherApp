import axios from "axios";

const getWeather = (lat, lon) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7db02ee52aeb100aae7598facd0b6951&lang=es`
    const res = axios.get(URL)
    return res
}

export default getWeather

