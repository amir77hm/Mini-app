import React, { useState, createContext } from "react";

export const RegisterContext = createContext()

export function RegisterProvider(props) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [step, setStep] = useState(1)

    const handleChange = (type, value) => {
        switch (type) {
            case 'step':
                console.log(value)
                setStep(value)
                break;
            case 'firstName':
                setFirstName(value)
                break;
            case 'lastName':
                setLastName(value)
                break;
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            default:
                break;
        }
    }
    const handleStep = (operator) => {
        switch (operator) {
            case 'up':
                setStep(step + 1)
                break;
            case 'down':
                setStep(step - 1)
                break;
            default:
                break;
        }
    }

    return (
        <RegisterContext.Provider value={{
            firstName,
            lastName,
            email,
            password,
            step,
            handleChange,
            handleStep
        }}>
            {props.children}
        </RegisterContext.Provider>
    )
}

