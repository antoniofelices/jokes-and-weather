import '@styles/style.css'
import {
    apiJokes1URL,
    apiJokes2URL,
    apiwWeatherURLRaw,
    allHeaders,
} from '@services/apiConfig'
import { fetchAData } from '@services/apiFetch'
import { createEntry, saveEntry, modifyEntry } from '@core/joke'
import { getCoordinates } from '@core/weather'
import { showJoke } from '@ui/selectors'
import printMainContent from '@ui/printMainContent'
import printWeather from '@ui/printWeather'
import { initRatingListener, resetRating } from '@ui/scoreJoke'
import reportJokes from '@data/reportJokes'

let currentEntry = null

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

        currentEntry =
            exchanger === true
                ? await createEntry(dataJokes1.joke)
                : await createEntry(dataJokes2.value)

        await printMainContent(currentEntry)
        initRatingListener(currentEntry)
        await resetRating()
        await saveEntry(currentEntry, reportJokes)

        exchanger = exchanger === true ? false : true
        console.log(reportJokes)
    })
}

async function main() {
    await initWeather()
    initRatingListener(currentEntry)
    await initJoke()
}

main()
