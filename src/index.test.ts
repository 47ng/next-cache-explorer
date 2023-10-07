import { describe, expect, test } from 'vitest'
import { hello } from './index.js'

describe('package-name', () => {
  test('testing works', () => {
    expect(hello).toBe('world')
  })
})
