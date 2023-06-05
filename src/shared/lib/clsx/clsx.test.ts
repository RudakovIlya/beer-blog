import { clsx } from './clsx'

describe('clsx', () => {
  let fistClass: string
  beforeEach(() => {
    fistClass = 'some-class'
  })
  test('expect some-class', () => {
    expect(clsx(fistClass, {}))
      .toBe(fistClass)
  })
  test('expect some-class with mods: active-class, and without selected', () => {
    expect(clsx(fistClass, {
      'active-class': true,
      selected: false,
    }))
      .toBe('some-class active-class')
  })
  test('expect some-class with mods: active-class hover', () => {
    expect(clsx(fistClass, {
      'active-class': true,
      hover: true,
    }))
      .toBe('some-class active-class hover')
  })
  test('expect some-class with mods: active-class and without hover', () => {
    expect(clsx(fistClass, {
      'active-class': true,
      hover: undefined,
    }))
      .toBe('some-class active-class')
  })
  test('expect some-class with additions classes', () => {
    expect(clsx(fistClass, {}, 'second-class', 'third-class'))
      .toBe('some-class second-class third-class')
  })
})
