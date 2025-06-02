import { getCurrentPositionAsync } from '@/helpers/promisification'
import type { Location } from '@/helpers/interfaces'
import resultConfig from '@/helpers/resultConfig'

async function getCoordinates() {
    const defaultLocation: Location = {
        latitude: resultConfig.defaultLatitudeWeather,
        longitude: resultConfig.defaultLongitudeWeather,
    }
    const position = await getCurrentPositionAsync()
    if (!position) return [defaultLocation.latitude, defaultLocation.longitude]
    return [position.coords.latitude, position.coords.longitude]
}

export { getCoordinates }
