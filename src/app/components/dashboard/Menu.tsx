'use client'
// Remember you must use an AuthProvider for 
// client components to useSession
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import UserCard from '../UserCard'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ChartBarIcon, ClipboardDocumentCheckIcon, Cog8ToothIcon, RssIcon, UserGroupIcon, BoltIcon, RectangleGroupIcon } from '@heroicons/react/24/outline'
import { useUserContext } from '@app/app/context/UserProvider'
import { useEffect } from 'react'

const Menu = ({ user }: any) => {
    const pathName = usePathname()

    // UserContext custom hook
    const {id, setId, username, setUsername, email, setEmail, avatar, setAvatar}: any = useUserContext()

    useEffect(() => {
        setUsername(user.username)
        setEmail(user.email)
        setAvatar(user.avatar)
    }, [])
    
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/client')
        }
    })

    return (
        <section className="flex flex-col gap-10 justify-between">
            <ul className="menu bg-base-200 w-56 rounded-box">
                <li>
                    <Link href={'/dashboard'}>
                        <RectangleGroupIcon className='h-4 w-4' />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href={'/dashboard/ops-benchmarks'}>
                        <ChartBarIcon className='h-4 w-4' />
                        Ops Benchmarks
                    </Link>
                </li>
                <li>
                    <Link href={'/dashboard/feed'}>
                        <RssIcon className='h-4 w-4' />
                        Feed
                    </Link>
                </li>
                <li>
                    <Link href={'/dashboard/resource-hub'}>
                        <UserGroupIcon className='h-4 w-4' />
                        Resource Hub
                    </Link>
                </li>
                <li>
                    <Link href={'/dashboard/automation-suite'}>
                        <BoltIcon className='h-4 w-4' />
                        Automation Suite
                    </Link>
                </li>
                <li>
                    <details>
                        <summary>
                            <ClipboardDocumentCheckIcon className='h-4 w-4' />
                            To-Do’s
                        </summary>
                        <ul>
                            <li>
                                <Link href={'/dashboard/todos/tasks'} className={pathName.endsWith("tasks") ? "active" : ""}>
                                    Tasks
                                </Link>
                            </li>
                            <li>
                                <Link href={'/dashboard/todos/categories'} className={pathName.endsWith("categories") ? "active" : ""}>
                                    Categories
                                </Link>
                            </li>
                            <li>
                                <Link href={'/dashboard/todos/statuses'} className={pathName.endsWith("statuses") ? "active" : ""}>
                                    Statuses
                                </Link>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
            <div className='flex flex-col gap-6'>
                <UserCard />
                <Link className='btn' href={'/dashboard/account'}>
                    <Cog8ToothIcon className='h-4 w-4' />
                    Account setting</Link>
            </div>
        </section>
    )
}

export default Menu