import {
    resultJoke,
    containerResult,
    mainSubTitle,
    showJoke,
} from '@/ui/selectors'
import resultConfig from '@/helpers/resultConfig'

async function printMainContent(data: string) {
    containerResult.classList.remove('hide')
    mainSubTitle.classList.add('hide')
    showJoke.textContent = resultConfig.buttonPrintMainContent
    resultJoke.textContent = data
}

export default printMainContent
