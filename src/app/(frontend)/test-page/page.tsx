'use client'

import { useState } from 'react'

export default function TestPage() {
  const [count, setCount] = useState<number>(0)
  return (
    <div>
      <h1>Test Page Heading</h1>
      <p>Counter: {count}</p>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>Increase Count</button>
    </div>
  )
}
