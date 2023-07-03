import { getInitialsForName } from './getInitialsForName'

describe('clsx', () => {
  test('expect to return initials BJ', () => {
    expect(getInitialsForName('Borys Johnson'))
      .toBe('BJ')
  })
  test('expect to return initials IR', () => {
    expect(getInitialsForName('ilya rudakov'))
      .toBe('IR')
  })
  test('expect to return initials I', () => {
    expect(getInitialsForName('ilya'))
      .toBe('I')
  })
  test('expect to return empty string', () => {
    expect(getInitialsForName())
      .toBe('')
  })
})
