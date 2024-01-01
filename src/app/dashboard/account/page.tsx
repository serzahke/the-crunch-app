import { authOptions } from '@app/app/api/auth/[...nextauth]/options'
import OrganizationForm from '@app/app/components/dashboard/account/OrganizationForm'
import ProfileFormEdit from '@app/app/components/dashboard/account/ProfileFormEdit'
import { getServerSession } from 'next-auth'
import React from 'react'

const getUsers = async () => {
  try {
      const res = await fetch(`${process.env.HOST}/api/users`, {
          cache: "no-store",
      })

      if (!res.ok) {
          throw new Error("Failed to fetch users");
      }

      return res.json();
  } catch (error) {
      console.log("Error loading users: ", error)
  }
}

const getUser = async () => {
  const session : any = await getServerSession(authOptions);

  try {
    const res = await fetch(`${process.env.HOST}/api/users/${session?.user?.id}`, {
      cache: "no-store"
    })

    if (!res.ok) {
      throw new Error("Faild to fetch user")
    }

    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const page = async () => {
  // const { users }  = await getUsers();
  const { user } = await getUser()

  // initialize users label and value for next TaskForm component
  // const usersArray = []

  // for (let i = 0; i < users.length; i++) {
  //   let user = {
  //     _id:  users[i]._id,
  //     label: users[i].username,
  //     value: users[i].username
  //   }
  //   usersArray.push(user)
  // }

  return (
    <div>
      <div className='flex flex-row justify-between content-center mb-4'>
        <h1 className='text-2xl font-bold mt-2'>Account Setting</h1>
      </div>
      <ProfileFormEdit user={user}/>
      {/* <OrganizationForm gottenUsers={usersArray} user={user}/> */}
    </div>
  )
}

export default page