"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Select from 'react-select';

const TaskForm = ({ categories, users }: any) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")
    const [reporter, setReporter] = useState<any>()
    const [assigned, setAssigned] = useState<any>()
    const [category, setCategory] = useState<any>()
    const [confirmedByOwner, setConfirmedByOwner] = useState(false)

    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!title || !description) {
            alert('Title and description are required.');
            return;
        }

        try {
            const res = await fetch(`/api/tasks`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    status: status,
                    reporter: reporter?.label,
                    assigned: assigned?.label,
                    category: category?.label,
                    confirmedByOwner: confirmedByOwner
                })
            })

            if (res.ok) {
                router.push('/dashboard/todos')
            } else {
                throw Error('Failed to create a task.')
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
                        <label className="form-control w-full">
                            <input
                                type="text"
                                placeholder="What's Task Title"
                                className="
                            input input-ghost w-full text-2xl font-bold
                            focus-within:border-none focus-within:outline-none
                            "
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                        </label>
                        <label className="form-control w-full">
                            <textarea
                                placeholder="Describe the issue"
                                rows={5}
                                className="
                            textarea textarea-ghost w-full bg-base-200
                            focus-within:border-none focus-within:outline-none
                            "
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                            />
                        </label>
                    </div>
                    <div className="flex flex-col min-w-[30%] border border-base-200 rounded-2xl p-4">
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text">Status</span>
                            </div>
                            <select
                                className="select select-bordered w-full max-w-md"
                                onChange={(e) => setStatus(e.target.value)}
                                value={status}
                            >
                                <option disabled selected>The situaton of task:</option>
                                <option value={"backlog"}>Back log</option>
                                <option value={"todo"}>Todo</option>
                                <option value={"inprogress"}>In progress</option>
                                <option value={"done"}>Done</option>
                            </select>
                        </label>
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text">Reporter</span>
                            </div>
                            {/* <SelectUser Prop={reporter} setProp={setReporter} /> */}
                            <Select
                                defaultValue={reporter}
                                onChange={setReporter}
                                options={users}
                                getOptionValue={option => option.username}
                                getOptionLabel={option => option.username}
                                value={reporter}
                            />
                        </label>
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text">Assigned</span>
                            </div>
                            {/* <SelectUser Prop={assigned} setProp={setAssigned} /> */}
                            <Select
                                defaultValue={assigned}
                                onChange={setAssigned}
                                options={users}
                                getOptionValue={option => option.username}
                                getOptionLabel={option => option.username}
                                value={assigned}
                            />
                        </label>
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            <Select
                                defaultValue={category}
                                onChange={setCategory}
                                options={categories}
                                value={category}
                            />
                        </label>
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text">Confirmed by owner</span>
                            </div>
                            <input
                                type="checkbox"
                                className="toggle"
                                onChange={(e) => setConfirmedByOwner(e.target.checked)}
                                checked={confirmedByOwner}
                            />
                        </label>
                        <div className='flex flex-col mt-4'>
                            <button type='submit' className='btn btn-primary' >Add Task</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default TaskForm