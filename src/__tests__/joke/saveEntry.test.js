import { describe, it, expect } from 'vitest'
import { saveEntry } from '@core/joke'

describe('Function "saveEntry"', () => {
    it('should be declared', async () => {
        expect(typeof saveEntry).toBe('function')
    })

    it('should return an array', async () => {
        expect((await saveEntry()) instanceof Array).toBe(true)
    })
})
