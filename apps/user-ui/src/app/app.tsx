import React, { useContext, useEffect } from 'react'
import './app.scss'

import { Route } from 'react-router-dom'
import { AppNavbar } from './app-navbar/app-navbar'
import NewsFeed from './news-feed/news-feed'
import MyLibrary from './library/my-library'
import { CurrentUser } from './shared/current-user.context'
import { whoAmI } from './api/user-api'

export const App = () => {
  const { setUser } = useContext(CurrentUser)

  useEffect(() => {
    whoAmI().then(res => setUser(res.data))
  }, [setUser])

  return (
    <>
      <AppNavbar></AppNavbar>
      <Route
        path="/"
        exact
        render={() => (
          <NewsFeed/>
        )}
      />
      <Route
        path="/library"
        exact
        render={() => (
          <MyLibrary></MyLibrary>
        )}
      />
    </>
  )
}

export default App
