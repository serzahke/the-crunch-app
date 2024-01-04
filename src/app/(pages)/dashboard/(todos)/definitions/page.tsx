import TasksList from '@/components/dashboard/todos/TasksList'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex flex-row justify-between content-center mb-4'>
        <h1 className='text-2xl font-bold mt-2'>Definitions</h1>
        <Link
          className='btn btn-primary'
          href={`/dashboard/todos/statuses/add`}
        >
          Add new Status
        </Link>
      </div>
      {/* <TasksList /> */}
    </div>
  )
}

export default page