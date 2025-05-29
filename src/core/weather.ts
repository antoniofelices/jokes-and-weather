import { getCurrentPositionAsync } from '@/helpers/promisification'
import type { Location } from '@/helpers/interfaces'
import resultConfig from '@/helpers/resultConfig'

async function getCoordinates() {
    const defaultLocation: Location = {
        latitude: resultConfig.defaultLatitudeWeather,
        longitude: resultConfig.defaultLongitudeWeather,
    }

    try {
        const position = await getCurrentPositionAsync()
        return [position.coords.latitude, position.coords.longitude]
    } catch (error) {
        return [defaultLocation.latitude, defaultLocation.longitude]
    }
}

export { getCoordinates }
