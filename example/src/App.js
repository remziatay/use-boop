import React from 'react'

import { useMyHook } from 'use-boop'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
