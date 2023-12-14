'use client'
// Remember you must use an AuthProvider for 
// client components to useSession
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import UserCard from '../UserCard'
import Link from 'next/link'

import { Cog8ToothIcon } from '@heroicons/react/24/solid'

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
                <li><Link href={'/dashboard/ops-benchmarks'}>Ops Benchmarks</Link></li>
                <li><Link href={'/dashboard/feed'}>Feed</Link></li>
                <li><Link href={'/dashboard/resource-hub'}>Resource Hub</Link></li>
                <li><Link href={'/dashboard/automation-suite'}>Automation Suite</Link></li>
                <li><Link href={'/dashboard/todos'}>To-Do’s</Link></li>
            </ul>
            <div className='flex flex-col gap-6'>
                <UserCard user={session?.user} pagetype={"Client"} />
                <Link className='btn' href={'/dashboard/account'}>
                    <Cog8ToothIcon className='h-6 w-6 text-black'/>
                    Account setting</Link>
            </div>
        </section>
    )
}

export default Menu