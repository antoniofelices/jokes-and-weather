import {
    resultJoke,
    containerResult,
    mainSubTitle,
    showJoke,
} from '@/ui/selectors'

import type { Joke } from '@/helpers/interfaces'

async function printJoke(data: Joke) {
    const buttonNewContent = 'Give me more, please'

    containerResult.classList.remove('hide')
    mainSubTitle.classList.add('hide')
    showJoke.textContent = buttonNewContent
    resultJoke.textContent = data.joke
}

export default printJoke
