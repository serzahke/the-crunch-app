const emailer = async ({ reporter, assigned }: any) => {
    try {
        const res = await fetch(`${process.env.HOST}/api/send`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                reporter: reporter,
                assigned: assigned,
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