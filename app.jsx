import React from 'react'
import Server from 'react-dom/server'

const Greet = () => <h1>Hello World!</h1>
console.log(Server.renderToString(<Greet />))
