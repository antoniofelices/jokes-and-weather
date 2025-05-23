const apiJokes1URL = 'https://icanhazdadjoke.com/'
const apiJokes2URL = 'https://api.chucknorris.io/jokes/random'

const apiJokes1Headers = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
    },
}

const apiJokes2Headers = {
    method: 'GET',
    headers: {
        Accept: 'application/json',
    },
}

export { apiJokes1URL, apiJokes2URL, apiJokes1Headers, apiJokes2Headers }
