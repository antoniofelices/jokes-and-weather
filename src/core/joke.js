import reportJokes from '@data/reportJokes'

async function createEntry(data) {
    // almaceno en una var el valor del dia y hora.
    // Construyo objeto
    //
    const entry = {
        joke: `${data.attachments[0].fallback}`,
        score: 0,
        date: new Date(),
    }
    return entry
}

async function saveEntry(value) {
    try {
        const resultToSave = createEntry(value)
        results.push(resultToSave)
    } catch (error) {
        const resultsLocal = []
        const messageNotConnect =
            'Cannot connect to the external database, saving data in local'
        const resultToSaveLocal = createEntryObject(value)
        resultsLocal.push(resultToSaveLocal)
        console.error(`${error.message}. ${messageNotConnect}`)
    }
}

export { createEntry, saveEntry }
