async function createEntry(joke, score) {
    const entry = {
        joke: `${joke}`,
        score: score,
        date: new Date().toISOString(),
    }
    return entry
}

async function saveEntry(entry, data) {
    try {
        data.push(entry)
    } catch (error) {
        const resultsLocal = []
        const messageNotConnect =
            'Cannot connect to the external database, saving data in local'
        resultsLocal.push(entry)
        console.error(`${error.message}. ${messageNotConnect}`)
    }
}

export { createEntry, saveEntry }
