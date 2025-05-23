import getJoke from '@ui/listeners/getJoke'
import scoreJoke from '@ui/listeners/scoreJoke'

const setupEventListeners = () => {
    getJoke()
    scoreJoke()
}

export default setupEventListeners
