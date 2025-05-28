import { rankingJoke, checkedInput, defaultInput } from '@/ui/selectors'
import { modifyEntry } from '@core/joke'
import localStore from '@/data/localStore'

function initRatingListener() {
    rankingJoke?.addEventListener('change', async () => {
        let rateItInput = document.querySelector(
            'input[name="rate-it"]:checked'
        ) as HTMLInputElement
        let entry: any = localStore.currentEntry
        let score: number = localStore.valueRateItInput

        score = rateItInput ? parseInt(rateItInput.value) : 0

        if (entry) {
            await modifyEntry(entry, score)
        }
    })
}

async function resetRating() {
    if (checkedInput) {
        checkedInput.checked = false
    }
    if (defaultInput) {
        defaultInput.checked = true
    }

    localStore.valueRateItInput = 0
}

export { initRatingListener, resetRating }
