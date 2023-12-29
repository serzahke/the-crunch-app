"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const CategoryFormEdit = ({ id, category }: any) => {
    const [newLabel, setNewLabel] = useState(category.label)
    const [newValue, setNewValue] = useState(category.value)

    console.log('newLabel', newLabel)
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            console.log('id', id)
            const res = await fetch(`/api/todos/categories/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    newLabel: newLabel,
                    newValue: newValue
                })
            })

            if (!res.ok) {
                throw new Error('Failed to update a category.')

            }

            router.refresh()
            location.reload();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <div className="flex flex-row gap-6">
                    <div className="flex flex-col w-full border border-base-200 rounded-2xl p-4">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Label</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setNewLabel(e.target.value)}
                                value={newLabel}
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Value</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setNewValue(e.target.value)}
                                value={newValue}
                            />
                        </label>
                        <div className='w-full max-w-xs mt-4'>
                            <button type='submit' className='btn btn-primary' >Update</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default CategoryFormEdit