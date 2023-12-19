"use client"

import React from 'react'
import { useState } from "react"

const getUsers = async () => {
    try {
        const res = await fetch(`/api/users`, {
            cache: "no-store",
        })

        if (!res.ok) {
            throw new Error("Failed to fetch users");
        }

        return res.json();
    } catch (error) {
        console.log("Error loading users: ", error)
    }
}

const SelectUser = ({newProp, setNewProp} : any) => {
    const [users, setusers] = useState<any[]>()

    const onLoadUsers = async (e: any) => {
        const { users } = await getUsers()

        console.log("__users", users)
        setusers(users)
    }


    return (
        <select className="select select-bordered w-full max-w-xs"
            onChange={(e) => setNewProp(e.target.value)}
            onClick={onLoadUsers}
        >
            <option value={newProp}>{newProp}</option>
            {
                users ? users.map((user: any) => (
                    <option key={user?._id} value={user?.username}>{user?.username}</option>
                )) : 'loading...'
            }
        </select>
    )
}

export default SelectUser