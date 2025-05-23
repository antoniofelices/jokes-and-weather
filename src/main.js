import '@styles/style.css'
import { fetchAJoke } from '@services/apiFetch'
import getJoke from '@ui/listeners/getJoke'
import reportJokes from '@data/reportJokes'
import { createEntry } from '@core/joke'
// import saveEntry from '@core/joke'

async function main() {
    const data = await fetchAJoke()
    const entry = await createEntry(data)
    reportJokes.push(entry)
    getJoke()
    console.log(reportJokes)
}

main()
