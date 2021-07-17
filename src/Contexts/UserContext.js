import React, { useState, createContext } from 'react'

export const UserContext = createContext()

export function UserProvider(props) {
    const [isUserLogin, setIsUserLogin] = useState(false)
    const [user, setUser] = useState(null)

    const logout = () => {
        setIsUserLogin(false)
    }
    const login = () => {
        setIsUserLogin(true)
    }
    return (
        <UserContext.Provider value={{
            isUserLogin,
            user,
            login,
            logout,
            setUser,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}