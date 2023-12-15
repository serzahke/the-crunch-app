// import Image from "next/image"

import ProfilePlaceHolder from "./client/ProfilePlaceHolder";

type User = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
} | undefined

type Props = {
    user: User,
    pagetype: string,
}

export default function Card({ user, pagetype }: Props) {

    //console.log(user)

    const greeting = user?.name ? (
        <div className="flex flex-col items-center font-bold text-5xl">
            <h6 className="text-lg">Hello {user?.name}!</h6>
        </div>
    ) : null

    const emailDisplay = user?.email ? (
        <div className="flex flex-col items-center text-5xl">
            <p className="text-sm">{user?.email}</p>
        </div>
    ) : null

    const userImage = user?.image ? (
        <div className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 drop-shadow-xl shadow-black mx-auto mt-8 rounded-full p-1">
            <img
                className="rounded-full"
                src={user?.image}
                width={80}
                height={80}
                alt={user?.name ?? "Profile Pic"}
            // priority={true}
            />
        </div>
    ) : (
        <ProfilePlaceHolder user={user} type="firstChar" />
    )

    return (
        <section className="flex flex-col content-center gap-4">
            {userImage}
            <div>
                {greeting}
                {emailDisplay}
            </div>
            {/* <p className="text-2xl text-center">{pagetype} Page!</p> */}
        </section>
    )
}