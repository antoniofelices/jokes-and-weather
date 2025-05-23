import '@styles/style.css'
import {
    apiJokes1URL,
    apiJokes2URL,
    apiwWeatherURLRaw,
    allHeaders,
} from '@services/apiConfig'
import { fetchAData } from '@services/apiFetch'
import { createEntry, saveEntry } from '@core/joke'
import { getCoordinates } from '@core/weather'
import { showJoke } from '@ui/selectors'
import printJoke from '@ui/printJoke'
import printWeather from '@ui/printWeather'

// Es un listener… pero no esta manipulando el DOM per-se… esta desatando todo: consulta API, crea objeto, imprime en pantalla, tot

// Cuando se clicka en button se desatan acciones:
//   Consume dato de la API
//   Random para
//   Muestra en pantalla el joke y botones de ranking => printJoke
//   Llama @ui/scoreJoke
//   Condicional, para definir valor de score. Score se almacena en una variable
//      si clicka en score se recupera el dato == Number de scoreJoke
//      no clicka en score == 0
//   Crea objeto con funcion createEntry, se le pasan dos propiedades:
//      var string joke
//      var number scoreJoke
//   Almacena objeto anterior usando funcion saveEntry (objeto es pasado como parametro)

async function initWeather() {
    let [latitude, longitude] = await getCoordinates()
    let weatherURL = `${apiwWeatherURLRaw}${latitude},${longitude}`
    const dataWeather = await fetchAData(weatherURL, allHeaders)
    printWeather(dataWeather)
}

async function initJoke() {
    let exchanger = true

    showJoke.addEventListener('click', async () => {
        const dataJokes1 = await fetchAData(apiJokes1URL, allHeaders)
        const dataJokes2 = await fetchAData(apiJokes2URL, allHeaders)
        let entry =
            exchanger === true
                ? await createEntry(dataJokes1.joke)
                : await createEntry(dataJokes2.value)

        printJoke(entry)
        saveEntry(entry)

        exchanger = exchanger === true ? false : true
        return exchanger
    })
}

async function main() {
    await initWeather()
    await initJoke()
}

main()
