import { rankingJoke, checkedInput, defaultInput } from '@ui/selectors'
import { modifyEntry } from '@core/joke'

let valueRateItInput = 0

function initRatingListener(currentEntry) {
    rankingJoke.addEventListener('change', async () => {
        let rateItInput = document.querySelector(
            'input[name="rate-it"]:checked'
        )
        valueRateItInput = rateItInput ? parseInt(rateItInput.value) : 0

        if (currentEntry) {
            await modifyEntry(currentEntry, valueRateItInput)
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

    valueRateItInput = 0
}

export { initRatingListener, resetRating }
