import { authOptions } from '@app/app/api/auth/[...nextauth]/options'
import OrganizationForm from '@app/app/components/dashboard/account/OrganizationForm'
import ProfileFormEdit from '@app/app/components/dashboard/account/ProfileFormEdit'
import getMainUser from '@app/app/components/utils/getMainUser'
import { useUserContext } from '@app/app/context/UserProvider'
import { getServerSession } from 'next-auth'
import React from 'react'

const getInvitedUsersByOrganizationId = async (id: any) => {
  try {
    const res = await fetch(`${process.env.HOST}/api/invitedusers/${id}`, {
      cache: "no-store"
    })

    if (!res.ok) {
      throw new Error("Faild to fetch categories")
    }

    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const page = async () => {
  const user = await getMainUser()
  const  invitedUsersByOrganizationId  = await getInvitedUsersByOrganizationId(user.organization._id)

  return (
    <div>
      <div className='flex flex-row justify-between content-center mb-4'>
        <h1 className='text-2xl font-bold mt-2'>Account Setting</h1>
      </div>
      <div className='flex flex-row w-full gap-6'>
        <ProfileFormEdit user={await getMainUser()} />
        <OrganizationForm user={await getMainUser()} invitedUsersByOrganizationId={invitedUsersByOrganizationId}/>
      </div>
    </div>
  )
}

export default page