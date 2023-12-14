'use client'
// Remember you must use an AuthProvider for 
// client components to useSession
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import UserCard from '../UserCard'
import Link from 'next/link'

import { ChartBarIcon, ClipboardDocumentCheckIcon, Cog8ToothIcon, RssIcon, UserGroupIcon, BoltIcon } from '@heroicons/react/24/outline'

const Menu = ({ userCard }: any) => {
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
                    <Link href={'/dashboard/ops-benchmarks'}>
                        <ChartBarIcon className='h-4 w-4 text-black' />
                        Ops Benchmarks
                    </Link>
                </li>
                <li>
                    <Link href={'/dashboard/feed'}>
                        <RssIcon className='h-4 w-4 text-black' />
                        Feed
                    </Link>
                </li>
                <li>
                    <Link href={'/dashboard/resource-hub'}>
                        <UserGroupIcon className='h-4 w-4 text-black' />
                        Resource Hub
                    </Link>
                </li>
                <li>
                    <Link href={'/dashboard/automation-suite'}>
                        <BoltIcon className='h-4 w-4 text-black' />
                        Automation Suite
                    </Link>
                </li>
                <li><Link href={'/dashboard/todos'}>
                    <ClipboardDocumentCheckIcon className='h-4 w-4 text-black' />
                    To-Do’s</Link></li>
            </ul>
            <div className='flex flex-col gap-6'>
                <UserCard user={session?.user} pagetype={"Client"} />
                <Link className='btn' href={'/dashboard/account'}>
                    <Cog8ToothIcon className='h-4 w-4 text-black' />
                    Account setting</Link>
            </div>
        </section>
    )
}

export default Menu