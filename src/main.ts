import '@styles/style.css'
import {
    apiJokes1URL,
    apiJokes2URL,
    apiKeyWeather,
    requestConfig,
    apiWeatherURLRaw,
} from '@/services/apiConfig'
import { fetchApiData } from '@/services/apiFetch'
import { createEntry, saveEntry } from '@/core/joke'
import { getCoordinates } from '@/core/weather'
import { showJoke } from '@/ui/selectors'
import printMainContent from '@/ui/printMainContent'
import printWeather from '@/ui/printWeather'
import { initRatingListener, resetRating } from '@/ui/scoreJoke'
import reportJokes from '@/data/reportJokes'
import localStore from '@/data/localStore'
import changeImageBg from '@/ui/changeImageBg'
import resultConfig from '@/helpers/resultConfig'
import { ConnectionError, ValidationError } from '@/helpers/errorsHandlers'

async function initWeather() {
    try {
        if (!apiKeyWeather) {
            throw new ConnectionError(resultConfig.messageFailApiKeyApiWeather)
        }
        let [latitude, longitude] = await getCoordinates()
        let weatherURL = `${apiWeatherURLRaw}${latitude},${longitude}`
        const weatherData = await fetchApiData(weatherURL, requestConfig)
        printWeather(weatherData)
    } catch (error) {
        if (error instanceof ConnectionError) {
            console.error(error.message)
        } else {
            console.error(error)
        }
        return null
    }
}

async function initJoke() {
    let exchanger = true
    showJoke?.addEventListener('click', async () => {
        try {
            const dataJokes1 = await fetchApiData(apiJokes1URL, requestConfig)
            const dataJokes2 = await fetchApiData(apiJokes2URL, requestConfig)

            if (!dataJokes1.joke) {
                throw new ValidationError(
                    resultConfig.messageNotValidateDataApiJokes1
                )
            }

            if (!dataJokes2.value) {
                throw new ValidationError(
                    resultConfig.messageNotValidateDataApiJokes2
                )
            }
            localStore.currentEntry =
                exchanger === true
                    ? await createEntry(dataJokes1.joke)
                    : await createEntry(dataJokes2.value)

            changeImageBg()
            await printMainContent(localStore.currentEntry.joke)
            await resetRating()
            initRatingListener()
            await saveEntry(localStore.currentEntry, reportJokes)

            exchanger = exchanger === true ? false : true
            console.log(reportJokes)
        } catch (error) {
            if (error instanceof ConnectionError) {
                console.error(error.message)
            } else if (error instanceof ValidationError) {
                console.error(error.message)
            } else {
                console.error(error)
            }

            return null
        }
    })
}

async function main() {
    await initWeather()
    initRatingListener()
    await initJoke()
}

main()
