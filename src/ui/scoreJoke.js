import { rankingJoke } from '@ui/selectors'

let valueRateItInput = 0

rankingJoke.addEventListener('change', (event) => {
    event.preventDefault()
    let rateItInput = document.querySelector('input[name="rate-it"]:checked')
    valueRateItInput = rateItInput ? parseInt(rateItInput.value) : 0
    // rankingJoke.reset()
})

export { valueRateItInput }
