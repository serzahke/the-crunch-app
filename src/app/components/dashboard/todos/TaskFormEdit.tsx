"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const TaskFormEdit = ({ id, task }: any) => {
    const [newTitle, setNewTitle] = useState(task.title)
    const [newDescription, setNewDescription] = useState(task.description)
    const [newStatus, setNewStatus] = useState(task.status)
    const [newReporter, setNewReporter] = useState(task.reporter)
    const [newAssigned, setNewAssigned] = useState(task.assigned)
    const [newCategory, setNewCategory] = useState(task.category)
    const [newConfirmedByOwner, setNewConfirmedByOwner] = useState(task.confirmedByOwner)

    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            console.log('id', id)
            const res = await fetch(`/api/tasks/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ newTitle, newDescription, newStatus, newReporter, newAssigned, newCategory, newConfirmedByOwner })
            })

            if (!res.ok) {
                throw new Error('Failed to update a task.')

            }

            router.refresh()
            router.push('/dashboard/todos')
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
                        onChange={(e) => setNewTitle(e.target.value)}
                        value={newTitle}
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
                        onChange={(e) => setNewDescription(e.target.value)}
                        value={newDescription}
                    />
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Status</span>
                    </div>
                    <select
                        className="select select-bordered w-full max-w-xs"
                        onChange={(e) => setNewStatus(e.target.value)}
                        value={newStatus}
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
                        onChange={(e) => setNewReporter(e.target.value)}
                        value={newReporter}
                    />
                </label><label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Assigned</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => setNewAssigned(e.target.value)}
                        value={newAssigned}
                    />
                </label><label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Category</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        onChange={(e) => setNewCategory(e.target.value)}
                        value={newCategory}
                    />
                </label><label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Confirmed by owner</span>
                    </div>
                    <input
                        type="checkbox"
                        className="toggle"
                        onChange={(e) => setNewConfirmedByOwner(e.target.checked)}
                        checked={newConfirmedByOwner}
                    />
                </label>
                <div className='mt-4'>
                    <button type='submit' className='btn btn-primary' >Add task</button>
                </div>
            </form>
        </>
    )
}

export default TaskFormEdit