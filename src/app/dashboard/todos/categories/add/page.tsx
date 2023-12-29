import CategoryForm from "@app/app/components/dashboard/todos/CategoryForm";

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


const page = async () => {
  return (
    <div>
      <div className='flex flex-row justify-between content-center mb-4'>
        <h1 className='text-2xl font-bold mt-2'>Add new Category</h1>
      </div>
      <CategoryForm />
    </div>
  )
}

export default page