"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Select from 'react-select'
import { useSession } from "next-auth/react";

const OrganizationForm = ({ user }: any) => {
    const { data: session }: any = useSession();

    const [name, setName] = useState<any>(user.organization.name)

    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const res = await fetch(`/api/organizations`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    userId: session?.user?.id,
                    name: name,
                })
            })

            if (!res.ok) {
                throw new Error('Failed to create a organization.')

            }

            router.refresh()
            location.reload();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <div className="flex flex-row gap-6">
                    <div className="flex flex-col w-full border border-base-200 rounded-2xl p-4">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Organization name</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                            />
                        </label>
                        <div className='w-full max-w-xs mt-4'>
                            <button type='submit' className='btn btn-primary' >Update</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default OrganizationForm