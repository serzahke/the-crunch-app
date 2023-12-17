import { EllipsisHorizontalIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react'
import RemoveBtn from './RemoveBtn';

const getTasks = async () => {
  try {
    const res = await fetch(`${process.env.HOST}/api/tasks`, {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error("Failed to fetch tasks");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading tasks: ", error)
  }
}

const TasksList = async () => {
  const { tasks } = await getTasks();

  return (
    <div className='flex flex-col gap-4'>
      {
        tasks.map((task: any) => (
          <div
            key={task._id}
            className="card w-96 bg-base-100 shadow-xl hover:bg-base-300"
          >
            <div className="card-body">
              <div className="card-actions justify-between">
                <Link href={`/dashboard/todos/${task._id}`}>
                  <h5 className='font-medium'>{task.title}</h5>
                </Link>
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
                    <EllipsisHorizontalIcon className='w-4' />
                  </div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <RemoveBtn id={task._id} />
                    </li>
                    <div className='flex flex-col gap-2 p-4 '>
                      <div className='flex flex-row'>
                        <span className='mr-1'>Reporter:</span>
                        <span>{task.reporter}</span>
                      </div>
                      <div className='flex flex-row'>
                        <span className='mr-1'>Caegory:</span>
                        <span>{task.category}</span>
                      </div>
                    </div>
                  </ul>
                </div>

              </div>
              <div className="card-actions justify-between mb-4">
                <p className='text-sm'>{task.description}</p>
                <div className="badge badge-primary">{task.status}</div>
              </div>
              <div className='flex flex-col gap-4'>
                <progress className="progress w-100" value="70" max="100"></progress>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default TasksList