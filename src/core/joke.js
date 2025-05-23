import reportJokes from '@data/reportJokes'

async function createEntry(data) {
    const entry = {
        joke: `${data}`,
        score: 0,
        date: new Date().toISOString(),
    }
    return entry
}

async function saveEntry(data) {
    try {
        reportJokes.push(data)
    } catch (error) {
        const resultsLocal = []
        const messageNotConnect =
            'Cannot connect to the external database, saving data in local'
        resultsLocal.push(data)
        console.error(`${error.message}. ${messageNotConnect}`)
    }
}

export { createEntry, saveEntry }
