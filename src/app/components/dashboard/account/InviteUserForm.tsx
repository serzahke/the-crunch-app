import { useOrganizationContext } from '@app/app/context/OrganizationProvider';
import { useSession } from 'next-auth/react';
import React, { useEffect } from 'react'
import { useRouter } from "next/navigation"


const InviteUserForm = () => {
    const { id, setId, name, setName, invitedUser, setInvitedUser, users, setUsers } = useOrganizationContext()
    
    console.log('__name', name)
    const router = useRouter();
    
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
            <form onSubmit={handleSubmitInvitedUser} >
                <div className="flex flex-col gap-4 w-full">
                <h4 className="text-2xl font-black my-2">{name} is Ready!</h4>

                    <div>
                        <h4 className="text-md my-2">Share You're Crunch project with others:</h4>
                        <label className="form-control">
                            {/* <div className="label">
                                <span className="label-text">email</span>
                            </div> */}
                            <input
                                type="text"
                                placeholder="Enter your friend email"
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
        </>
    )
}

export default InviteUserForm