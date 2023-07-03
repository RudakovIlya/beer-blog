export const getInitialsForName = (name?: string) => {
  if (!name) {
    return ''
  }
  const words = name.split(' ')
  const firstLetter = words[0] ? words[0][0] : ''
  const secondLatter = words[1] ? words[1][0] : ''

  return `${firstLetter.toUpperCase()}${secondLatter.toUpperCase()}`
}
