import axios from "axios";

const getWeather = async (lat, lon) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7db02ee52aeb100aae7598facd0b6951&units=metric&lang=es`   
    const res = await axios.get(URL)
    return res
}

export default getWeather

