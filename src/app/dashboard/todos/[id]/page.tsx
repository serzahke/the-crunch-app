import TaskForm from '@app/app/components/dashboard/todos/TaskForm'
import TaskFormEdit from '@app/app/components/dashboard/todos/TaskFormEdit'
import React from 'react'

const getTaskById = async (id: any) => {
  try {
    const res = await fetch(`${process.env.HOST}/api/tasks/${id}`, {
      cache: "no-store"
    })

    if (!res.ok) {
      throw new Error("Faild to fetch task")
    }

    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const page = async ({ params }: any) => {
  const { id } = params;
  const { task } = await getTaskById(id);
  const { title, description, status, reporter, assigned, category, confirmedByOwner } = task;

  return (
    <div className='w-full'>
      {/* <h1 className='text-2xl font-bold'>{title}</h1> */}
      <TaskFormEdit id={id} task={task} />
    </div>
  )
}

export default page