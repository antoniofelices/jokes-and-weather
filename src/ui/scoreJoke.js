import { rankingJoke, checkedInput, defaultInput } from '@ui/selectors'
import { modifyEntry } from '@core/joke'
import localStore from '@data/localStore'

function initRatingListener() {
    rankingJoke.addEventListener('change', async () => {
        let rateItInput = document.querySelector(
            'input[name="rate-it"]:checked'
        )
        localStore.valueRateItInput = rateItInput
            ? parseInt(rateItInput.value)
            : 0

        if (localStore.currentEntry) {
            await modifyEntry(
                localStore.currentEntry,
                localStore.valueRateItInput
            )
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
