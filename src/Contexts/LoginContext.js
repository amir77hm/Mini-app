import React, { useState, createContext } from 'react'

export const LoginContext = createContext()

export function LoginProvider(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (type, value) => {
        switch (type) {
            case 'username':
                setUsername(value)
                break;
            case 'password':
                setPassword(value)
                break;
            default:
                break;
        }
    }

    return (
        <LoginContext.Provider value={{
            username,
            password,
            handleChange
        }}>
            {props.children}
        </LoginContext.Provider>
    )
}