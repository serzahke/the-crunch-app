import TaskForm from "@app/app/components/dashboard/todos/TaskForm"

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

const page = async () => {
  const { categories } = await getCategories();
  const { users } = await getUsers();
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
    <div>
      <div className='flex flex-row justify-between content-center mb-4'>
        <h1 className='text-2xl font-bold mt-2'>Add new task</h1>
      </div>
      <TaskForm categories={categories} users={usersArray} statuses={statuses} />
    </div>
  )
}

export default page