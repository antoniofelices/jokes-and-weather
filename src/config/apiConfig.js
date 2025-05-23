const apiJokes1URL = 'https://icanhazdadjoke.com/'
const apiJokes2URL = 'https://api.chucknorris.io/jokes/random'
const weatherAPIKey = import.meta.env.VITE_API_KEY_WEATHER
const weatherURLRaw = `https://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=`

const allHeaders = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
    },
}

export { apiJokes1URL, apiJokes2URL, allHeaders, weatherURLRaw }
