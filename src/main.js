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
import { valueRateItInput } from '@ui/listeners/scoreJoke'
import reportJokes from '@data/reportJokes'

async function initWeather() {
    let [latitude, longitude] = await getCoordinates()
    let weatherURL = `${apiwWeatherURLRaw}${latitude},${longitude}`
    const dataWeather = await fetchAData(weatherURL, allHeaders)
    printWeather(dataWeather)
}

async function initJoke() {
    let exchanger = true
    let counter = 0
    showJoke.addEventListener('click', async () => {
        counter++
        const dataJokes1 = await fetchAData(apiJokes1URL, allHeaders)
        const dataJokes2 = await fetchAData(apiJokes2URL, allHeaders)

        let entry =
            exchanger === true
                ? await createEntry(dataJokes1.joke, valueRateItInput)
                : await createEntry(dataJokes2.value, valueRateItInput)

        await printMainContent(entry)
        exchanger = exchanger === true ? false : true

        if (counter > 1) {
            await saveEntry(entry, reportJokes)
            console.log(reportJokes)
        }
    })
}

async function main() {
    await initWeather()
    await initJoke()
}

main()
