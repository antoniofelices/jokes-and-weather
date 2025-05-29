import resultConfig from '@/helpers/resultConfig'

export async function fetchAData(
    apiURL: string,
    apiHeaders: { method: string; headers: any }
) {
    try {
        const response = await fetch(apiURL, apiHeaders)
        if (!response.ok) {
            throw new Error(
                `${resultConfig.textResponseFailApiFetch} ${response.status}`
            )
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error(resultConfig.textResponseErrorApiFetch, error)
        return []
    }
}
