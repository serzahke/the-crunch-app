"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import { TrashIcon } from '@heroicons/react/24/outline'

const RemoveBtnCategory = ({ id }: any) => {
    const router = useRouter();

    const handleRemove = async () => {
        const confirmed = confirm("Are you sure?");

        if (confirmed) {
            const res = await fetch(`/api/todos/categories?id=${id}`, {
                method: "DELETE"
            });

            if (res.ok) {
                router.refresh()
            }
        }
    }

    return (
        <>
            <button onClick={handleRemove}>
                <TrashIcon className='w-4' />
                Delete
            </button>
        </>
    )
}

export default RemoveBtnCategory