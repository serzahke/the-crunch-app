"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import SelectUser from "./SelectUser"

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
            // router.push('/dashboard/todos')
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
                        <label className="form-control w-full">
                            <input
                                type="text"
                                placeholder="What's Task Title"
                                className="
                            input input-ghost w-full text-2xl font-bold
                            focus-within:border-none focus-within:outline-none
                            "
                                onChange={(e) => setNewTitle(e.target.value)}
                                value={newTitle}
                            />
                        </label>
                        <label className="form-control w-full">
                            <textarea
                                placeholder="Describe the issue"
                                rows={5}
                                className="
                            textarea textarea-ghost w-full bg-base-200 dark: bg-base-200

                            focus-within:border-none focus-within:outline-none
                            "
                                onChange={(e) => setNewDescription(e.target.value)}
                                value={newDescription}
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
                                onChange={(e) => setNewStatus(e.target.value)}
                                value={newStatus}
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
                            <SelectUser newProp={newReporter} setNewProp={setNewReporter} />
                        </label>
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text">Assigned</span>
                            </div>
                            <SelectUser newProp={newAssigned} setNewProp={setNewAssigned} />
                        </label>
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-md"
                                onChange={(e) => setNewCategory(e.target.value)}
                                value={newCategory}
                            />
                        </label>
                        <label className="form-control w-full max-w-md">
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
                        <div className='flex flex-col mt-4'>
                            <button type='submit' className='btn btn-primary' >Update</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default TaskFormEdit