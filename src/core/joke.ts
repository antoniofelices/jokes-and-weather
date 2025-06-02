import type { Joke } from '@/helpers/interfaces'
import resultConfig from '@/helpers/resultConfig'
import localStore from '@/data/localStore'

async function createEntry(joke: string) {
    try {
        const entry: Joke = {
            joke: `${joke}`,
            score: 0,
            date: `${new Date().toISOString()}`,
        }
        return entry
    } catch (error) {
        console.error(error)
        return localStore.currentEntry
    }
}

async function saveEntry(entry: Joke, data: Joke[]) {
    try {
        data.push(entry)
        return data
    } catch (error) {
        const resultsLocal = []
        resultsLocal.push(entry)
        console.error(`${resultConfig.messageSaveEntryLocalStore}`)
        return resultsLocal
    }
}

async function modifyEntry(entry: Joke, newValueScore: number) {
    if (!entry || !newValueScore) return
    entry.score = newValueScore
    return entry
}

export { createEntry, saveEntry, modifyEntry }
