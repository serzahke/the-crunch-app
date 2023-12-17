"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const TaskForm = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")
    const [reporter, setReporter] = useState("")
    const [assigned, setAssigned] = useState("")
    const [category, setCategory] = useState("")
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
                body: JSON.stringify({ title, description, status, reporter, assigned, category, confirmedByOwner })
            })

            if (res.ok) {
                router.push('/dashboard/todos')
            } else {
                throw new Error('Failed to create a task.')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Title</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Description</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Status</span>
                    </div>
                    <select
                        className="select select-bordered w-full max-w-xs"
                        onChange={(e) => setStatus(e.target.value)}
                        value={status}
                    >
                        <option disabled selected>The situaton of task:</option>
                        <option value={"backlog"}>Back log</option>
                        <option value={"todo"}>Todo</option>
                        <option value={"inprogress"}>In progress</option>
                        <option value={"done"}>Done</option>
                    </select>
                </label><label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Reporter</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => setReporter(e.target.value)}
                        value={reporter}
                    />
                </label><label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Assigned</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => setAssigned(e.target.value)}
                        value={assigned}
                    />
                </label><label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Category</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    />
                </label><label className="form-control w-full max-w-xs">
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
                <div className='mt-4'>
                    <button type='submit' className='btn btn-primary' >Add task</button>
                </div>
            </form>
        </>
    )
}

export default TaskForm