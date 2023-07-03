import { MAX_COLOR_INDEX } from 'shared/const/maxColorIndex'
import { getColorIndexForName } from './getColorIndexForName'

describe('getColorIndexForName', () => {
  test('should return a color index between 0 and MAX_COLOR_INDEX for a given name', () => {
    const index = getColorIndexForName('Test', MAX_COLOR_INDEX)
    expect(index).toBeGreaterThanOrEqual(0)
    expect(index).toBeLessThan(MAX_COLOR_INDEX)
  })

  test('should return the same color index for the same name', () => {
    const index1 = getColorIndexForName('Test', MAX_COLOR_INDEX)
    const index2 = getColorIndexForName('Test', MAX_COLOR_INDEX)
    expect(index1).toEqual(index2)
  })

  test('should return a random color index if name is undefined', () => {
    const index1 = getColorIndexForName(undefined, MAX_COLOR_INDEX)
    const index2 = getColorIndexForName(undefined, MAX_COLOR_INDEX)
    expect(index1).not.toEqual(index2)
  })

  test('should use default maxIndex if not provided', () => {
    const index = getColorIndexForName('Test')
    expect(index).toBeGreaterThanOrEqual(0)
    expect(index).toBeLessThan(MAX_COLOR_INDEX)
  })
})
