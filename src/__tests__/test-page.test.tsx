import { expect, test, describe } from 'vitest'
import { userEvent } from '@vitest/browser/context'
import { render } from 'vitest-browser-react'

import TestPage from '@/app/(frontend)/test-page/page'

describe('test-page Tests', () => {
  test('test-page', async () => {
    const screen = render(<TestPage />)
    const heading = screen.getByRole('heading', {
      name: 'Test Page Heading',
    })
    await expect.element(heading).toBeVisible()
    const btn = screen.getByRole('button', {
      name: 'Increase Count',
    })
    await expect.element(btn).toBeVisible()

    await expect.element(screen.getByText('Counter: 0')).toBeVisible()

    await userEvent.click(btn)
    await expect.element(screen.getByText('Counter: 1')).toBeVisible()
  })
  test.fails('test-page-fails', async () => {
    const screen = render(<TestPage />)
    const heading = screen.getByRole('heading', {
      name: 'Not a Test Page Heading',
    })

    await expect.element(heading).toBeVisible()
  })
})
