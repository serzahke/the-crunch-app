"use client"

import moment from "moment";
import { useRouter } from "next/navigation"
import { useState } from "react"
import Select from 'react-select';

const TaskFormEdit = ({ id, task, categories, users, statuses }: any) => {
    const [newTitle, setNewTitle] = useState(task.title)
    const [newDescription, setNewDescription] = useState(task.description)
    const [newStatus, setNewStatus] = useState(task.status)
    const [newReporter, setNewReporter] = useState<any>(task.reporter)
    const [newAssigned, setNewAssigned] = useState<any>(task.assigned)
    const [newCategory, setNewCategory] = useState<any>(task.category)
    const [newConfirmedByOwner, setNewConfirmedByOwner] = useState(task.confirmedByOwner)

    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            console.log('id', id)
            const res = await fetch(`/api/todos/tasks/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    newTitle: newTitle,
                    newDescription: newDescription,
                    newStatus: newStatus?.label,
                    newReporter: newReporter?.label,
                    newAssigned: newAssigned?.label,
                    newCategory: newCategory?.label,
                    newConfirmedByOwner: newConfirmedByOwner
                })
            })

            if (!res.ok) {
                throw new Error('Failed to update a task.')

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
                    <div className="flex flex-col w-full border border-base-200 rounded-2xl p-4 justify-between">
                        <div>
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
                            textarea textarea-ghost w-full bg-base-200
                            focus-within:border-none focus-within:outline-none
                            "
                                    onChange={(e) => setNewDescription(e.target.value)}
                                    value={newDescription}
                                />
                            </label>
                        </div>
                        <div className="flex flex-row gap-6">
                            <div className="flex flex-row gap-2">
                                <span className="text-xs text-gray-400 dark:text-gray-600">Updated:</span>
                                <span className="text-xs">{moment(task.updatedAt).format('DD-MMM-YYYY HH:mm:ss')}</span>
                            </div>
                            <div className="flex flex-row gap-2">
                                <span className="text-xs text-gray-400 dark:text-gray-600">Created:</span>
                                <span className="text-xs">{moment(task.createdAt).format('DD-MMM-YYYY HH:mm:ss')}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col min-w-[30%] border border-base-200 rounded-2xl p-4">
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text">Status</span>
                            </div>
                            <Select
                                defaultValue={{ label: newStatus }}
                                onChange={setNewStatus}
                                options={statuses}
                                unstyled
                                classNames={{
                                    control: (state) => state.isFocused ?
                                        'input input-bordered input-primary rounded-lg w-full max-w-xs text-md px-2' :
                                        'input input-bordered rounded-lg w-full max-w-xs text-md px-2',
                                    menu: () => "p-4 dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52",
                                    option: () => "btn btn-ghost text-lg font-normal text-left align-middle pt-2"

                                }}
                            />
                        </label>
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text">Reporter</span>
                            </div>
                            <Select
                                defaultValue={{ label: newReporter }}
                                onChange={setNewReporter}
                                options={users}
                                unstyled
                                classNames={{
                                    control: (state) => state.isFocused ?
                                        'input input-bordered input-primary rounded-lg w-full max-w-xs text-md px-2' :
                                        'input input-bordered rounded-lg w-full max-w-xs text-md px-2',
                                    menu: () => "p-4 dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52",
                                    option: () => "btn btn-ghost text-lg font-normal text-left align-middle pt-2"

                                }}
                            />
                        </label>
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text">Assigned</span>
                            </div>
                            <Select
                                defaultValue={{ label: newAssigned }}
                                onChange={setNewAssigned}
                                options={users}
                                unstyled
                                classNames={{
                                    control: (state) => state.isFocused ?
                                        'input input-bordered input-primary rounded-lg w-full max-w-xs text-md px-2' :
                                        'input input-bordered rounded-lg w-full max-w-xs text-md px-2',
                                    menu: () => "p-4 dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52",
                                    option: () => "btn btn-ghost text-lg font-normal text-left align-middle pt-2"

                                }}
                            />
                        </label>
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text">Category</span>
                            </div>
                            <Select
                                defaultValue={{ label: newCategory }}
                                onChange={setNewCategory}
                                options={categories}
                                unstyled
                                classNames={{
                                    control: (state) => state.isFocused ?
                                        'input input-bordered input-primary rounded-lg w-full max-w-xs text-md px-2' :
                                        'input input-bordered rounded-lg w-full max-w-xs text-md px-2',
                                    menu: () => "p-4 dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52",
                                    option: () => "btn btn-ghost text-lg font-normal text-left align-middle pt-2"

                                }}
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