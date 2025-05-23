import {
    resultJoke,
    rankingJoke,
    showJoke,
    containerResult,
} from '@ui/selectors'
import printJoke from '@ui/printJoke'
import { createEntry } from '@core/joke'
import { fetchAJoke } from '@services/apiFetch'
// import { createEntry, saveEntry } from '@core/joke'

// Cuando se clicka en button se desatan acciones:
//   Consume dato de la API
//   Muestra en pantalla el joke y botones de ranking => printJoke
//   Llama @ui/scoreJoke
//   Condicional, para definir valor de score. Score se almacena en una variable
//      si clicka en score se recupera el dato == Number de scoreJoke
//      no clicka en score == 0
//   Crea objeto con funcion createEntry, se le pasan dos propiedades:
//      var string joke
//      var number scoreJoke
//   Almacena objeto anterior usando funcion saveEntry (objeto es pasado como parametro)

async function getJoke(data) {
    const data1 = await fetchAJoke()

    showJoke.addEventListener('click', () => {
        // window.location.reload()
        // const entry = createEntry()
        printJoke(data1)
    })
}

export default getJoke
