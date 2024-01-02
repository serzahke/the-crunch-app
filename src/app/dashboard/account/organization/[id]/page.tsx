import OrganizationForm from '@app/app/components/dashboard/account/OrganizationForm'
import OrganizationFormEdit from '@app/app/components/dashboard/account/OrganizationFormEdit'
import getMainUser from '@app/app/components/utils/getMainUser'
import React from 'react'

const getOrganizationById = async (id: any) => {
  try {
    const res = await fetch(`${process.env.HOST}/api/organizations/${id}`, {
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

const getInvitedUsers = async () => {
  try {
    const res = await fetch(`${process.env.HOST}/api/invitedusers`, {
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

const page = async ({ params }: any) => {
  const user = await getMainUser()
  const { invitedUsers } = await getInvitedUsers()
  const { id } = params;
  const { organization } = await getOrganizationById(id)

  console.log('organization', organization)
  return (
    <div className='w-full'>
      <OrganizationFormEdit organization={organization} invitedUsers={invitedUsers} />
    </div>
  )
}

export default page