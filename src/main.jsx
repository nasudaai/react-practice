console.log("Test pnpm script")

import React from 'react'
import { createRoot } from 'react-dom/client'


document.body.innerHTML = '<div id="app"></div>'


const root = createRoot(document.getElementById('app'))
root.render(<h1>Hi</h1>)
