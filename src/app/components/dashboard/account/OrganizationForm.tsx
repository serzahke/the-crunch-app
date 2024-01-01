"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Select from 'react-select'
import { useSession } from "next-auth/react";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";

const OrganizationForm = ({ user }: any) => {
    const { data: session }: any = useSession();

    const [name, setName] = useState<any>(user.organization.name || null)

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
            <form onSubmit={handleSubmit} className='flex flex-row w-full gap-4 justify-center border border-base-200 rounded-2xl p-4'>
                <div className="flex flex-col gap-4 max-w-md justify-center">
                    <div className="flex flex-row w-full justify-center">
                        <BuildingStorefrontIcon className="w-40 text-gray-300" />
                    </div>
                    <div>
                        <p className="text-xs">If You're an admin of organization, you can create a store and send invitations to your staffs. enjoy your crunching!</p>
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Organization name</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered"
                            onChange={(e) => setName(e.target.value)}
                            defaultValue={name}
                        />
                    </label>
                    <button type='submit' className='btn btn-primary flex w-full mt-4' >Create Organization</button>
                </div>
            </form>
        </>
    )
}

export default OrganizationForm