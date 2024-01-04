import OrganizationForm from "@/components/dashboard/account/organization/OrganizationForm";
import TaskForm from "@/components/dashboard/todos/TaskForm"
import getMainUser from "@/components/utils/getMainUser";

const getInvitedUsersByOrganizationId = async (id: any) => {
    try {
      const res = await fetch(`${process.env.HOST}/api/invitedusers/${id}`, {
        cache: "no-store"
      })
  
      if (!res.ok) {
        throw new Error("Faild to fetch categories")
      }
  
      return res.json()
    } catch (error) {
      console.log(error)
    }
  }

const page = async () => {
    const user = await getMainUser()
    const invitedUsersByOrganizationId = await getInvitedUsersByOrganizationId(user?.organization?._id)

  return (
    <div>
      <div className='flex flex-row justify-between content-center mb-4'>
        <h1 className='text-2xl font-bold mt-2'>Add new Organization</h1>
      </div>
      <OrganizationForm user={await getMainUser()} invitedUsersByOrganizationId={invitedUsersByOrganizationId} />
    </div>
  )
}

export default page