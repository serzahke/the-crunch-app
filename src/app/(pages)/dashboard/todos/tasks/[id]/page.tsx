import TaskForm from '@/components/dashboard/todos/TaskForm'
import TaskFormEdit from '@/components/dashboard/todos/TaskFormEdit'
import React from 'react'

const getTaskById = async (id: any) => {
  try {
    const res = await fetch(`${process.env.HOST}/api/todos/tasks/${id}`, {
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
    const res = await fetch(`${process.env.HOST}/api/todos/categories`, {
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

const getStatuses = async () => {
  try {
    const res = await fetch(`${process.env.HOST}/api/todos/statuses`, {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error("Failed to fetch statuses");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading statuses: ", error)
  }
}

const page = async ({ params }: any) => {
  const { id } = params;
  const { task } = await getTaskById(id);
  const { categories } = await getCategories();
  const { users }  = await getUsers();
  const { statuses } = await getStatuses();

  // initialize users label and value for next TaskForm component
  const usersArray = []

  for (let i = 0; i < users.length; i++) {
    let user = {
      label: users[i].username,
      value: users[i].username
    }
    usersArray.push(user)
  }

  return (
    <div className='w-full'>
      <TaskFormEdit id={id} task={task} categories={categories} users={usersArray} statuses={statuses} />
    </div>
  )
}

export default page