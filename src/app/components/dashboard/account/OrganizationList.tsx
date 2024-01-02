import { EllipsisHorizontalIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react'
import moment from 'moment';

const getOrganizations = async () => {
  try {
    const res = await fetch(`${process.env.HOST}/api/organizations`, {
      cache: "no-store",
    })

    if (!res.ok) {
      throw new Error("Failed to fetch organizations");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading organizations: ", error)
  }
}

const OrganizationList = async () => {
  const { organizations } = await getOrganizations();

  return (
    <div className='flex flex-col gap-4'>
      {
        organizations.map((organization: any) => (
          <div
            key={organization._id}
            className="card w-96 bg-base-100 shadow-xl hover:bg-base-300"
          >
            <div className="card-body">
              <div className="card-actions justify-between">
                <Link href={`/dashboard/account/organization/${organization._id}`}>
                  <h5 className='font-medium'>{organization.name}</h5>
                </Link>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default OrganizationList