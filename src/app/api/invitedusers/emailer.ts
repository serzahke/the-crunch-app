const emailer = async ({ invitedBy, email }: any) => {
    try {
        const res = await fetch(`${process.env.HOST}/api/send/invitedUser`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                invitedBy: invitedBy,
                email: email,
            })
        })

        if (res.ok) {
            console.log('Email sent successfully')
        } else {
            throw Error('Failed to create a task.')
        }
    } catch (error) {
        console.log(error)
    }
}

export default emailer