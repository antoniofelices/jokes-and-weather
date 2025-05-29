import { describe, it, expect } from 'vitest'
import { saveEntry } from '@core/joke'

describe('Function "saveEntry"', () => {
    it('Should be declared', async () => {
        expect(typeof saveEntry).toBe('function')
    })

    it('Should return an array', async () => {
        expect((await saveEntry()) instanceof Array).toBe(true)
    })
})
