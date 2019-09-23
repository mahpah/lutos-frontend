import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

import App from './app/app'
import { CurrentUserProvider } from './app/shared/current-user.context'

ReactDOM.render(
  <BrowserRouter>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
