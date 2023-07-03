import { MAX_COLOR_INDEX } from '../../const/maxColorIndex'
import { getRandomInt } from '../getRandomInt/getRandomInt'

export const getColorIndexForName = (
  name: string | undefined,
  maxIndex: number = MAX_COLOR_INDEX,
) => {
  let index: number

  if (name) {
    index = name
      .split('')
      .map((c) => {
        return c.charCodeAt(0)
      })
      .reduce((acc, code) => {
        return acc + code
      }, 0) % maxIndex
  } else {
    index = getRandomInt(maxIndex)
  }

  return index
}
