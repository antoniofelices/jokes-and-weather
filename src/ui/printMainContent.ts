import {
    resultJoke,
    containerResult,
    mainSubTitle,
    showJoke,
} from '@/ui/selectors'

async function printMainContent(data: string) {
    const buttonNewContent = 'Give me more, please'
    containerResult.classList.remove('hide')
    mainSubTitle.classList.add('hide')
    showJoke.textContent = buttonNewContent
    resultJoke.textContent = data
}

export default printMainContent
