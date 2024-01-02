"use client"

import { createContext, useState, Dispatch, SetStateAction, useContext, useEffect } from "react"

type UserType = {
    id: string
    username: string
    email: string
    register: 'authorized' | 'unauthorized'
}

interface ContextProps {
    id: string,
    setId: Dispatch<SetStateAction<string>>,
    name: string,
    setName: Dispatch<SetStateAction<string>>,
    invitedUser: string
    setInvitedUser: Dispatch<SetStateAction<string>>
    users: UserType[]
    setUsers: Dispatch<SetStateAction<UserType[]>>

}

const OrganizationContext = createContext<ContextProps>({
    id: '',
    setId: (): string => '',
    name: '',
    setName: (): string => '',
    invitedUser: '',
    setInvitedUser: (): string => '',
    users: [],
    setUsers: (): UserType[] => [],
})

export const OrganizationContextProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [invitedUser, setInvitedUser] = useState('')
    const [users, setUsers] = useState<[] | UserType[]>([])

    return (
        <OrganizationContext.Provider value={{ id, setId, name, setName, invitedUser, setInvitedUser, users, setUsers}}>
            {children}
        </OrganizationContext.Provider>
    )
}

export const useOrganizationContext = () => useContext(OrganizationContext)