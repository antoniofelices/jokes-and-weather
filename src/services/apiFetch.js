const API_URL = 'https://icanhazdadjoke.com/slack'

export async function fetchAJoke() {
    try {
        let headersResponse = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        }
        const response = await fetch(API_URL, headersResponse)
        const textResponseFail = `Error when fetch data`
        if (!response.ok) {
            throw new Error(textResponseFail)
        }
        const data = await response.json()
        return data
    } catch (error) {
        const textConsoleError = `fetchAllJokes error:`
        console.error(textConsoleError, error)
        return []
    }
}
