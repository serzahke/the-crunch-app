const InvitedUsersList = ({ invitedUsers }: any) => {
    // const { id, setId, name, setName, invitedUser, setInvitedUser, users, setUsers } = useOrganizationContext()
    // console.log('users', users)

    return (
        <>
            {
                invitedUsers.map((user: any) => (
                    <div
                        key={user._id}
                        className="card w-full bg-base-100 shadow-xl hover:bg-base-300"
                    >
                        <div className="card-body flex flex-row justify-between">
                            {user.email}
                            <span className="text-xs font-bold pt-2">Not confirmed</span>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default InvitedUsersList