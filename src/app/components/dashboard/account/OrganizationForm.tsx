"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import { useOrganizationContext } from "@app/app/context/OrganizationProvider";

const OrganizationForm = ({ user, invitedUsersByOrganizationId }: any) => {
    const { id, setId, name, setName, invitedUser, setInvitedUser, users, setUsers } = useOrganizationContext()
    const { data: session }: any = useSession();

    console.log('invitedUsersByOrganizationId', invitedUsersByOrganizationId)
    useEffect(() => {
        setId(user?.organization?._id)
        setName(user?.organization?.name)
        setUsers(invitedUsersByOrganizationId?.usersInvitedBy)
    }, [])
    console.log('users', users)

    const router = useRouter();

    const handleSubmitOrganization = async (e: any) => {
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

    const handleSubmitInvitedUser = async (e: any) => {
        e.preventDefault();

        try {
            const res = await fetch(`/api/invitedusers`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    invitedBy: id,
                    email: invitedUser,
                })
            })

            if (!res.ok) {
                throw new Error('Failed to create a invited user.')
            }

            router.refresh()
            location.reload();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {
                !name == null ?
                    <form onSubmit={handleSubmitOrganization} className='flex flex-row w-full gap-4 justify-center border border-base-200 rounded-2xl p-4'>
                        <div className="flex flex-col gap-4 max-w-md justify-center">
                            <div className="flex flex-row w-full justify-center">
                                <BuildingStorefrontIcon className="w-40 text-gray-300 dark:text-gray-700" />
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
                    </form> :
                    <div className='flex flex-col w-full gap-4 border border-base-200 rounded-2xl p-4'>
                        <h2 className="text-2xl font-semibold">{name}</h2>
                        <form onSubmit={handleSubmitInvitedUser} >
                            <div className="flex flex-col gap-4 w-full">
                                <div>
                                    <h4 className="text-xl">Share with others</h4>
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">email</span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Type here"
                                            className="input input-bordered"
                                            onChange={(e) => setInvitedUser(e.target.value)}
                                            defaultValue={invitedUser}
                                        />
                                    </label>
                                </div>
                                <div className="w-full max-w-xs">
                                    <button type='submit' className='btn btn-primary' >Send Invitation</button>
                                </div>
                            </div>
                        </form>
                        {
                            users.map((user) => (
                                <div
                                    key={user.id}
                                    className="card w-96 bg-base-100 shadow-xl hover:bg-base-300"
                                >
                                    <div className="card-body">
                                        {user.email}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            }

        </>
    )
}

export default OrganizationForm