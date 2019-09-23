import React, { createContext, useState, ReactNode,  } from 'react'
import { User } from '@lutos-frontend/data-contract'

export type CurrentUserContext = {
  user: User,
  setUser: (u: User) => void
  clearUser: () => void
}

export const CurrentUser = createContext<CurrentUserContext>(null)

export type CurrentUserProviderProps = {
  children: ReactNode
}

export const CurrentUserProvider = ({children}: CurrentUserProviderProps) => {
  const [user, setUser] = useState(null)
  const context: CurrentUserContext = {
    user: user,
    setUser(u) {
      setUser(u)
    },
    clearUser() {
      setUser(null)
    }
  }

  return <CurrentUser.Provider value={context}>
    {children}
  </CurrentUser.Provider>
}
