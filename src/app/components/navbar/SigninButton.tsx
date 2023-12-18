"use client"

import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link';
import { ArrowLeftOnRectangleIcon, HomeIcon, RectangleGroupIcon } from '@heroicons/react/24/outline';

const SigninButton = () => {

    const { data: session } = useSession();

    if (session && session.user) {
        return (
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost m-1">{session.user.email}</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <Link href={'/'}>
                            <HomeIcon className='w-4 h-4' />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={'/dashboard'}>
                            <RectangleGroupIcon className='w-4 h-4' />
                            Dashboard
                        </Link>
                    </li>
                    <button className='btn btn-ghost text-red-500 hover:bg-red-50' onClick={() => signOut()} >
                        <ArrowLeftOnRectangleIcon className='w-4 h-4 text-red-400' />
                        Sign out
                    </button>
                </ul>
            </div>
        )
    }

    return (
        <div>
            {/* <button className='btn btn-ghost' onClick={() => signIn()}>Sign in</button> */}
            <Link className='btn btn-ghost' href={'/signin'}>Sign in</Link>
        </div>
    )
}

export default SigninButton