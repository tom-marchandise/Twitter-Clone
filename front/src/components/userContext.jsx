import React, { createContext, useContext, useEffect, useState } from 'react'

const getUserDataFromToken = () => {
  const tokenPayload = localStorage.getItem('token')

  if (tokenPayload) {
    try {
      const tokenData = JSON.parse(tokenPayload)
      const userData = tokenData.user

      return userData
    } catch (error) {
      console.error("Erreur lors de l'extraction des données de l'utilisateur depuis le token : ", error)
      return null
    }
  } else {
    return null
  }
}

const UserContext = createContext()

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserDataFromToken())

  useEffect(() => {
    setUser(getUserDataFromToken())
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
