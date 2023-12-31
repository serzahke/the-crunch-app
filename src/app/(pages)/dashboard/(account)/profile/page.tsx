import ProfileFormEdit from '@/components/dashboard/account/profile/ProfileFormEdit'
import getMainUser from '@/components/utils/getMainUser'
import React from 'react'

const page = async () => {
  const user = await getMainUser()

  return (
    <div>
      <div className='flex flex-row justify-between content-center mb-4'>
        <h1 className='text-2xl font-bold mt-2'>Account Setting</h1>
      </div>
      <div className='flex flex-row w-full gap-6'>
        <ProfileFormEdit user={await getMainUser()} />
      </div>
    </div>
  )
}

export default page