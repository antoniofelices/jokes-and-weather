import { resultJoke, containerResult, mainTitle, showJoke } from '@ui/selectors'

async function printJoke(data) {
    const buttonNewContent = 'Give me more, please'

    containerResult.classList.remove('hide')
    mainTitle.classList.add('hide')
    showJoke.textContent = buttonNewContent
    resultJoke.textContent = data.joke
}

export default printJoke
