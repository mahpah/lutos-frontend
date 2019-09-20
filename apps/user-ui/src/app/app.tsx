import React from 'react'
import './app.scss'

import { Route, Link } from 'react-router-dom'
import { AppNavbar } from './app-navbar/app-navbar'
import NewsFeed from './news-feed/news-feed'

export const App = () => {
  return (
    <div>
      <AppNavbar></AppNavbar>
      <Route
        path="/"
        exact
        render={() => (
          <NewsFeed/>
        )}
      />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </div>
  )
}

export default App
