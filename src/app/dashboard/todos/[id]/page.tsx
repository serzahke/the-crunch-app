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

const getCategories = async () => {
  try {
    const res = await fetch(`${process.env.HOST}/api/tasks/categories`, {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading categories: ", error)
  }
}


const page = async ({ params }: any) => {
  const { id } = params;
  const { task } = await getTaskById(id);
  const { categories } = await getCategories();
  const { users }  = await getUsers();

  console.log('categories', categories)
  return (
    <div className='w-full'>
      <TaskFormEdit id={id} task={task} categories={categories} users={users} />
    </div>
  )
}

export default page