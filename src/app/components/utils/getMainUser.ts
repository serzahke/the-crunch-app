import { authOptions } from "@/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

const getUser = async () => {
    const session: any = await getServerSession(authOptions);

    try {
        const res = await fetch(`${process.env.HOST}/api/users/${session?.user?.id}`, {
            cache: "no-store"
        })

        if (!res.ok) {
            throw new Error("Faild to fetch user")
        }

        return res.json()
    } catch (error) {
        console.log(error)
    }
}


const getMainUser = async () => {
    const { user } = await getUser()

    return user
}

export default getMainUser