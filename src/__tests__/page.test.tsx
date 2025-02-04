import { expect, test, describe } from 'vitest'
// import { page, userEvent } from '@vitest/browser/context'
import { render } from 'vitest-browser-react'

import TestPage from '@/app/(frontend)/test-page/page'

describe('Temp Test', () => {
  test('Home Page Temp', async () => {
    const screen = render(<TestPage />)
    const heading = await screen.getByRole('heading', {
      name: 'Test Page Heading',
    })

    await expect.element(heading).toBeVisible()
    // await expect.element(img).toBeVisible()

    // await userEvent.click(btn)
  })
})
