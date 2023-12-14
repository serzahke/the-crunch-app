// import Image from "next/image"

type User = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    // image?: string | null | undefined;
} | undefined

type Props = {
    user: User,
    pagetype: string,
}

export default function Card({ user, pagetype }: Props) {

    //console.log(user)

    const greeting = user?.name ? (
        <div className="flex flex-col items-start bg-white rounded-lg font-bold text-5xl text-black">
            <h6 className="text-lg">Hello {user?.name}!</h6>
        </div>
    ) : null

    const emailDisplay = user?.email ? (
        <div className="flex flex-col items-start bg-white rounded-lg text-5xl text-black">
            <p className="text-sm">{user?.email}</p>
        </div>
    ) : null

    // const userImage = user?.image ? (
    //     <Image
    //         className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
    //         src={user?.image}
    //         width={200}
    //         height={200}
    //         alt={user?.name ?? "Profile Pic"}
    //         priority={true}
    //     />
    // ) : null

    return (
        <section className="flex flex-col">
            {greeting}
            {emailDisplay}
            {/* {userImage} */}
            {/* <p className="text-2xl text-center">{pagetype} Page!</p> */}
        </section>
    )
}