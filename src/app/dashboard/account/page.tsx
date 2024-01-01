import OrganizationForm from '@app/app/components/dashboard/account/OrganizationForm'
import ProfileFormEdit from '@app/app/components/dashboard/account/ProfileFormEdit'
import getMainUser from '@app/app/components/utils/getMainUser'
import React from 'react'


const page = async () => {
  return (
    <div>
      <div className='flex flex-row justify-between content-center mb-4'>
        <h1 className='text-2xl font-bold mt-2'>Account Setting</h1>
      </div>
      <div className='flex flex-row w-full gap-6'>
        <ProfileFormEdit user={await getMainUser()} />
        <OrganizationForm user={await getMainUser()} />
      </div>
    </div>
  )
}

export default page