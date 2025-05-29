import { describe, it, expect } from 'vitest'
import { getCoordinates } from '@core/weather'

describe('Function "getCoordinates"', () => {
    it('Should be declared', async () => {
        expect(typeof getCoordinates).toBe('function')
    })

    it('Should return an array', async () => {
        expect((await getCoordinates()) instanceof Array).toBe(true)
    })

    it('Should be the lenght of two', async () => {
        let result = await getCoordinates()
        expect(result).toHaveLength(2)
    })

    it('The values have to be a numbers', async () => {
        let result = await getCoordinates()

        expect(typeof result[0]).toBe('number')
        expect(typeof result[1]).toBe('number')
    })
})
