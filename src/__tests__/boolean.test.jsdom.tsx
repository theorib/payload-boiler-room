import { expect, test, describe } from 'vitest'

describe('Temp Test', () => {
  test('true', () => {
    expect(true).toBe(true)
  })
  test.fails('false', () => {
    expect(false).toBe(true)
  })
})
