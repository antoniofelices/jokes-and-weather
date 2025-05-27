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
import printMainContent from '@ui/printMainContent'
import printWeather from '@ui/printWeather'
import { initRatingListener, resetRating } from '@ui/scoreJoke'
import reportJokes from '@data/reportJokes'
import localStore from '@data/localStore'
import changeImageBg from '@ui/changeImageBg'

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

        localStore.currentEntry =
            exchanger === true
                ? await createEntry(dataJokes1.joke)
                : await createEntry(dataJokes2.value)

        changeImageBg()
        await printMainContent(localStore.currentEntry)
        await resetRating()
        initRatingListener()
        await saveEntry(localStore.currentEntry, reportJokes)

        exchanger = exchanger === true ? false : true
        console.log(reportJokes)
    })
}

async function main() {
    await initWeather()
    initRatingListener(localStore.currentEntry)
    await initJoke()
}

main()
