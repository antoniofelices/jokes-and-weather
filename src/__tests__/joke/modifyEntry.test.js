import { describe, it, expect } from 'vitest'
import { modifyEntry } from '@core/joke'

describe('Function "modifyEntry"', () => {
    let entry = {
        joke: 'Lorem ipsum',
        score: 1,
        date: '2025-05-29T10:34:58.776Z',
    }
    it('should be declared', async () => {
        expect(typeof modifyEntry).toBe('function')
    })

    it('should return an object', async () => {
        expect((await modifyEntry(entry, 2)) instanceof Object).toBe(true)
    })

    it('should modify original object', async () => {
        let result = await modifyEntry(entry, 2)
        expect(result.score).toBe(2)
    })
})
