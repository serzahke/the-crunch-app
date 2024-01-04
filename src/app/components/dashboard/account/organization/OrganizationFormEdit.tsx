"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import { useOrganizationContext } from "@/context/OrganizationProvider";
import InviteUsersForm from "./InviteUsersForm";
import InvitedUsersList from "./InvitedUsersList";

const OrganizationFormEdit = ({ organization, invitedUsers }: any) => {
    const { id, setId, name, setName, invitedUser, setInvitedUser, users, setUsers } = useOrganizationContext()
    const { data: session }: any = useSession();
    const [error, setError] = useState("");

    console.log('organization', organization)

    useEffect(() => {
        setId(organization?._id)
        setName(organization?.name)
        setUsers(invitedUsers?.usersInvitedBy)
    }, [])

    const router = useRouter();

    const handleSubmitOrganization = async (e: any) => {
        e.preventDefault();

        if (!session?.user?.id || !name) {
            setError("All fields are necessary.");
            return;
        }

        try {
            const res = await fetch(`/api/organizations/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    newName: name,
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
        <div className="flex flex-row gap-6">
            <form onSubmit={handleSubmitOrganization} className='flex flex-col w-full gap-4 border border-base-200 rounded-2xl p-4'>
                <div className="flex flex-col gap-4">
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

                    <button type='submit' className='btn btn-primary flex w-full mt-4' >Update Organization</button>

                    {error && (
                        <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                            {error}
                        </div>
                    )}
                </div>
            </form>
            <div className='flex flex-col w-full gap-4 border border-base-200 rounded-2xl p-4'>
                <InviteUsersForm />
                <InvitedUsersList invitedUsers={invitedUsers} />
            </div>
        </div>
    )
}

export default OrganizationFormEdit