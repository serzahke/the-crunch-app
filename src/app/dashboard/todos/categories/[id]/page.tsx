import CategoryFormEdit from '@app/app/components/dashboard/todos/CategoryFormEdit'
import React from 'react'

const getCategoryById = async (id: any) => {
  try {
    const res = await fetch(`${process.env.HOST}/api/todos/categories/${id}`, {
      cache: "no-store"
    })

    if (!res.ok) {
      throw new Error("Faild to fetch categories")
    }

    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const page = async ({ params }: any) => {
  const { id } = params;
  const { category } = await getCategoryById(id);

  console.log('___categories', category)
  return (
    <div className='w-full'>
      <CategoryFormEdit id={id} category={category}  />
    </div>
  )
}

export default page