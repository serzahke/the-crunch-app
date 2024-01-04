import OrganizationForm from '@/components/dashboard/account/organization/OrganizationForm'
import OrganizationList from '@/components/dashboard/account/organization/OrganizationList'
import TasksList from '@/components/dashboard/todos/TasksList'
import getMainUser from '@/components/utils/getMainUser'
import Link from 'next/link'
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

const page = () => {
  // const user = await getMainUser()
  // const invitedUsersByOrganizationId = await getInvitedUsersByOrganizationId(user?.organization?._id)

  return (
    <div>
      <div className='flex flex-row justify-between content-center mb-4'>
        <h1 className='text-2xl font-bold mt-2'>Organization</h1>
        <Link
          className='btn btn-primary'
          href={`/dashboard/organization/add`}
        >
          Add new Organization
        </Link>
      </div>
      <OrganizationList />
      {/* <TasksList /> */}
    </div>
    // <div>
    //   <div className='flex flex-row justify-between content-center mb-4'>
    //     <h1 className='text-2xl font-bold mt-2'>Account Setting</h1>
    //   </div>
    //   <div className='flex flex-row w-full gap-6'>
    //     <OrganizationForm user={await getMainUser()} invitedUsersByOrganizationId={invitedUsersByOrganizationId}/>
    //   </div>
    // </div>
  )
}

export default page