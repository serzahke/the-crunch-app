// import { options } from "../api/auth/[...nextauth]/options"
import { authOptions } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next"
import UserCard from "../components/UserCard"
import { redirect } from "next/navigation"
import { useSession } from "next-auth/react";

export default async function ServerPage() {
    // const session = await getServerSession(authOptions)
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/client')
        }
    })

    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/server')
    }

    return (
        <section className="flex flex-col gap-6">
            <UserCard user={session?.user} pagetype={"Server"} />
        </section>
    )

}
