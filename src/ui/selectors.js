const resultJoke = document.getElementById('result-joke')
const rankingJoke = document.getElementById('ranking-joke')
const showJoke = document.getElementById('show-joke')
const containerResult = document.getElementById('container-result')
const weatherlocation = document.getElementById('weather-location')
const weatherTemperature = document.getElementById('weather-temperature')
const mainSubTitle = document.getElementsByTagName('h2')[0]
const checkedInput = document.querySelector('input[name="rate-it"]:checked')
const defaultInput = document.querySelector('input[name="rate-it"][value="0"]')

export {
    resultJoke,
    rankingJoke,
    showJoke,
    containerResult,
    weatherlocation,
    weatherTemperature,
    mainSubTitle,
    checkedInput,
    defaultInput,
}
