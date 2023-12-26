import TaskForm from "@app/app/components/dashboard/todos/TaskForm"

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

const page = async () => {
    const { categories } = await getCategories();
    const { users }  = await getUsers();
    
    return (
        <div>
            <div className='flex flex-row justify-between content-center mb-4'>
                <h1 className='text-2xl font-bold mt-2'>Add new task</h1>
            </div>
            <TaskForm categories={categories} users={users}/>
        </div>
    )
}

export default page