"use client"

import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link';

const SigninButton = () => {

    const { data: session } = useSession();

    if (session && session.user) {
        return (
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost m-1">{session.user.name}</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link href={'/dashboard'}>Dashboard</Link></li>
                    <button className='btn btn-ghost' onClick={() => signOut()}>Sign out</button>
                </ul>
            </div>
        )
    }

    return (
        <div>
            <button className='btn btn-ghost' onClick={() => signIn()}>Sign in</button>
        </div>
    )
}

export default SigninButton