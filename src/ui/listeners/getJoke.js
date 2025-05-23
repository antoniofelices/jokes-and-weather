import { showJoke } from '@ui/selectors'
import printJoke from '@ui/printJoke'
// import { createEntry, saveEntry } from '@core/joke'

async function getJoke(data) {
    showJoke.addEventListener('click', () => {
        // window.location.reload()
        // const entry = createEntry()
        printJoke(data)
    })
}

export default getJoke
