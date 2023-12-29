import { EllipsisHorizontalIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react'
import RemoveBtn from './RemoveBtn';
import moment from 'moment';

const getCategories = async () => {
  try {
    const res = await fetch(`${process.env.HOST}/api/tasks/categories`, {
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

const CategoriesList = async () => {
  const { categories } = await getCategories();

  return (
    <div className='flex flex-col gap-4'>
      {
        categories.map((category: any) => (
          <div
            key={category._id}
            className="card w-96 bg-base-100 shadow-xl hover:bg-base-300"
          >
            <div className="card-body">
              <div className="card-actions justify-between">
                <Link href={`/dashboard/todos/categories/${category._id}`}>
                  <h5 className='font-medium'>{category.label}</h5>
                </Link>
                <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
                    <EllipsisHorizontalIcon className='w-4' />
                  </div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <div className='flex flex-col gap-2 p-4 '>
                      <div className='flex flex-col'>
                        <span className='mr-1'>Created:</span>
                        <span className='font-medium'>{moment(category.createdAt).format('DD-MMM-YYYY HH:mm:ss')}</span>
                      </div>
                    </div>
                    <li>
                      <RemoveBtn id={category._id} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CategoriesList