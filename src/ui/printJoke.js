import { resultJoke, containerResult } from '@ui/selectors'

async function printJoke(data1, data2) {
    // Aca se imprime en pantalla el Joke y los botones de ranking
    // resultJoke.textContent('')
    // containerResult.classList.remove('hide')
    resultJoke.textContent = data1.joke
}

export default printJoke
