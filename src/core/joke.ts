import type { Joke } from '@/helpers/interfaces'
import resultConfig from '@/helpers/resultConfig'

async function createEntry(joke: Joke) {
    const entry: Joke = {
        joke: `${joke}`,
        score: 0,
        date: `${new Date().toISOString()}`,
    }
    return entry
}

async function saveEntry(entry: Joke, data: Joke[]) {
    try {
        data.push(entry)
        return data
    } catch (error) {
        const resultsLocal = []
        resultsLocal.push(entry)
        console.error(`${resultConfig.messageNotConnectSaveEntry}`)
        // console.error(`${error.message}. ${messageNotConnect}`)
    }
}

async function modifyEntry(entry: Joke, newValueScore: number) {
    entry.score = newValueScore
    return entry
}

export { createEntry, saveEntry, modifyEntry }
