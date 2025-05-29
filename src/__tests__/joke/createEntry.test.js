import { describe, it, expect } from 'vitest'
import { createEntry } from '@core/joke'

describe('Function "createEntry"', () => {
    it('Should be declared', async () => {
        expect(typeof createEntry).toBe('function')
    })

    it('Should return an object', async () => {
        expect((await createEntry()) instanceof Object).toBe(true)
    })

    it('The values of the properties should be of the following types: string, number, string', async () => {
        let result = await createEntry('Ipsum calar')

        expect(typeof result.joke).toBe('string')
        expect(typeof result.score).toBe('number')
        expect(typeof result.date).toBe('string')
    })
})
