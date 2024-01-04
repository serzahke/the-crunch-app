import { EllipsisHorizontalIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react'
import RemoveBtnTask from './RemoveBtnTask';
import ProgressBar from './ProgressBar';
import moment from 'moment';

const getTasks = async () => {
  try {
    const res = await fetch(`${process.env.HOST}/api/todos/tasks`, {
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
                <Link href={`/dashboard/tasks/${task._id}`}>
                  <h5 className='font-medium'>{task.title}</h5>
                </Link>
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
                    <EllipsisHorizontalIcon className='w-4' />
                  </div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <div className='flex flex-col gap-2 p-4 '>
                      <div className='flex flex-col'>
                        <span className='mr-1 text-xs text-gray-400 dark:text-gray-600'>Reporter:</span>
                        <span className='font-medium'>{task.reporter}</span>
                      </div>
                      <div className='flex flex-col'>
                        <span className='mr-1 text-xs text-gray-400 dark:text-gray-600'>Category:</span>
                        <span className='font-medium'>{task.category}</span>
                      </div>
                      <div className='flex flex-col'>
                        <span className='mr-1 text-xs text-gray-400 dark:text-gray-600'>Created:</span>
                        <span className='font-medium'>{moment(task.createdAt).format('DD-MMM-YYYY HH:mm:ss')}</span>
                      </div>
                    </div>
                    <li>
                      <RemoveBtnTask id={task._id} />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-actions flex flex-col mb-4">
                <p className='text-sm '>{task.description.substr(0, 70)}...</p>
                <div className="badge badge-primary">{task.status}</div>
              </div>
              <div className='flex flex-col gap-4'>
                <ProgressBar statusProp={task.status} />
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default TasksList