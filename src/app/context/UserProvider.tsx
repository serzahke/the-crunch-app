"use client"

import { getSession } from "next-auth/react";
import { createContext, useState, Dispatch, SetStateAction, useContext, useEffect } from "react";
import { authOptions } from "../api/auth/[...nextauth]/options";

interface ContextProps {
    id: string,
    setId: Dispatch<SetStateAction<string>>,
    username: string,
    setUsername: Dispatch<SetStateAction<string>>,
    email: string,
    setEmail: Dispatch<SetStateAction<string>>,
    avatar: string,
    setAvatar: Dispatch<SetStateAction<string>>
}

const UserContext = createContext<ContextProps>({
    id: '',
    setId: (): string => '',
    username: '',
    setUsername: (): string => '',
    email: '',
    setEmail: (): string => '',
    avatar: '',
    setAvatar: (): string => '',
})

export const UserContextProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const [id, setId] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [avatar, setAvatar] = useState('')

    return (
        <UserContext.Provider value={{ id, setId, username, setUsername, email, setEmail, avatar, setAvatar }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)