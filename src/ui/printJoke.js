import { resultJoke, containerResult } from '@ui/selectors'

async function printJoke(data) {
    // Aca se imprime en pantalla el Joke y los botones de ranking
    // resultJoke.textContent('')
    // containerResult.classList.remove('hide')
    resultJoke.textContent = data.attachments[0].fallback
}

export default printJoke
