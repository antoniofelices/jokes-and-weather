import { getCurrentPositionAsync } from '@/helpers/promisification'
import type { Location } from '@/helpers/interfaces'

async function getCoordinates() {
    const defaultLocation: Location = {
        latitude: 41.3851,
        longitude: 2.1734,
        city: 'Barcelona',
    }

    try {
        const position = await getCurrentPositionAsync()
        return [position.coords.latitude, position.coords.longitude]
    } catch (error) {
        return [defaultLocation.latitude, defaultLocation.longitude]
    }
}

export { getCoordinates }
