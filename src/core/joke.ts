async function createEntry(joke) {
    const entry = {
        joke: `${joke}`,
        score: 0,
        date: new Date().toISOString(),
    }
    return entry
}

async function saveEntry(entry, data) {
    try {
        data.push(entry)
        return data
    } catch (error) {
        const resultsLocal = []
        const messageNotConnect =
            'Cannot connect to the external database, saving data in local'
        resultsLocal.push(entry)
        console.error(`${error.message}. ${messageNotConnect}`)
    }
}

async function modifyEntry(entry, newValueScore) {
    entry.score = newValueScore
    return entry
}

export { createEntry, saveEntry, modifyEntry }
