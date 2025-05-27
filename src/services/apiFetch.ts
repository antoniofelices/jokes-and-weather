export async function fetchAData(
    apiURL: string,
    apiHeaders: { method: string; headers: any }
) {
    try {
        const response = await fetch(apiURL, apiHeaders)
        const textResponseFail = `Fail when fetch data. URL or Headers HTTP status:`
        if (!response.ok) {
            throw new Error(`${textResponseFail} ${response.status}`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        const textConsoleError = `Cannot fetch data. Error:`
        console.error(textConsoleError, error)
        return []
    }
}
