"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Select from 'react-select';

const CategoryForm = ({ categories, users, statuses }: any) => {
    const [label, setLabel] = useState("")
    const [value, setValue] = useState("")

    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!label || !value) {
            alert('Label and Value are required.');
            return;
        }

        try {
            const res = await fetch(`/api/todos/categories`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    label: label,
                    value: value,
                })
            })

            if (res.ok) {
                router.push('/dashboard/categories')
            } else {
                throw Error('Failed to create a category.')
            }
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
                                onChange={(e) => setLabel(e.target.value)}
                                value={label}
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
                                onChange={(e) => setValue(e.target.value)}
                                value={value}
                            />
                        </label>
                        <div className='w-full max-w-xs mt-4'>
                            <button type='submit' className='btn btn-primary' >Add Category</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default CategoryForm