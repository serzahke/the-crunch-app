import TaskForm from "@app/app/components/dashboard/todos/TaskForm"

const page = () => {
    return (
        <div>
            <div className='flex flex-row justify-between content-center mb-4'>
                <h1 className='text-2xl font-bold mt-2'>Add new task</h1>
            </div>
            <TaskForm />
        </div>
    )
}

export default page