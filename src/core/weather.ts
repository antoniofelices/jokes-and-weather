import { getCurrentPositionAsync } from '@/helpers/promisification'

async function getCoordinates() {
    const defaultLocation = {
        latitude: 41.3851,
        longitude: 2.1734,
        city: 'Barcelona',
    }

    try {
        const position = await getCurrentPositionAsync({})
        return [position.coords.latitude, position.coords.longitude]
    } catch (error) {
        return [defaultLocation.latitude, defaultLocation.longitude]
    }
}

export { getCoordinates }
