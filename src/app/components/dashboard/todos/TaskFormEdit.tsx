"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const getUsers = async () => {
    try {
        const res = await fetch(`/api/users`, {
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

const TaskFormEdit = ({ id, task }: any) => {
    const [newTitle, setNewTitle] = useState(task.title)
    const [newDescription, setNewDescription] = useState(task.description)
    const [newStatus, setNewStatus] = useState(task.status)
    const [newReporter, setNewReporter] = useState(task.reporter)
    const [newAssigned, setNewAssigned] = useState(task.assigned)
    const [newCategory, setNewCategory] = useState(task.category)
    const [newConfirmedByOwner, setNewConfirmedByOwner] = useState(task.confirmedByOwner)

    const [users, setusers] = useState<any[]>()

    const router = useRouter();

    const onLoadUsers = async (e: any) => {
        const { users } = await getUsers()

        console.log("__users", users)
        setusers(users)
    }

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
                <div className="flex flex-row gap-6">
                    <div className="flex flex-col w-full border border-inherit rounded-2xl p-4">
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
                                rows={1}
                                className="
                            textarea textarea-ghost w-full bg-slate-50
                            focus-within:border-none focus-within:outline-none
                            "
                                onChange={(e) => setNewDescription(e.target.value)}
                                value={newDescription}
                            />
                        </label>
                    </div>
                    <div className="flex flex-col min-w-[30%] border border-inherit rounded-2xl p-4">
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
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-md"
                                onChange={(e) => setNewReporter(e.target.value)}
                                value={newReporter}
                            />
                        </label>
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text">Assigned</span>
                            </div>
                            {/* <button className="btn" onClick={onLoadUsers}>users</button> */}
                            <select className="select select-bordered w-full max-w-xs"
                                onChange={(e) => setNewAssigned(e.target.value)}
                                onClick={onLoadUsers}
                            >
                                <option value={newAssigned}>{newAssigned}</option>
                                {
                                    users ? users.map((user: any) => (
                                        <option value={user.username}>{user.username}</option>
                                    )) : 'loading...'
                                }
                            </select>
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