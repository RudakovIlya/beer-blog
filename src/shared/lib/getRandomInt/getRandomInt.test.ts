import { getRandomInt } from './getRandomInt'

describe('getRandomInt', () => {
  test('should return a number less than or equal to the maximum', () => {
    const max = 10
    const result = getRandomInt(max)
    expect(result).toBeLessThanOrEqual(max)
  })

  test('should only return integers', () => {
    const max = 100
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 100; i++) {
      const result = getRandomInt(max)
      expect(result).toEqual(Math.floor(result))
    }
  })

  test('should return random numbers', () => {
    const max = 100
    const results = new Set()
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 100; i++) {
      const result = getRandomInt(max)
      results.add(result)
    }
    expect(results.size).toBeGreaterThan(1)
  })
  test('should return a random integer between 0 and the max value', () => {
    const result = getRandomInt(10)
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThan(10)
  })

  test('should work with max value of 1', () => {
    const result = getRandomInt(1)
    expect(result).toEqual(0)
  })
})
