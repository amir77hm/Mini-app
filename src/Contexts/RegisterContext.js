import React, { useState, createContext } from "react";
import { useHistory } from "react-router-dom";

export const RegisterContext = createContext()

export function RegisterProvider(props) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [step, setStep] = useState(1)

    const history = useHistory()

    const next = () => {
        if (step < 4) {
            handleChange('step', (step + 1))
            history.push(`/register/step${step + 1}`)
        }
    }
    const prev = () => {
        if (step > 1) {
            handleChange('step', step - 1)
            history.push(`/register/step${step - 1}`)
        }
    }

    const handleChange = (type, value) => {
        switch (type) {
            case 'step':
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

    return (
        <RegisterContext.Provider value={{
            firstName,
            lastName,
            email,
            password,
            step,
            handleChange,
            next,
            prev
        }}>
            {props.children}
        </RegisterContext.Provider>
    )
}

