import { useUserContext } from "@/context/UserProvider";
import ProfilePlaceHolder from "@/components/client/ProfilePlaceHolder";

type User = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
} | undefined


export default function Card() {
    const {id, setId, username, setUsername, email, setEmail, avatar, setAvatar}: any = useUserContext()

    const emailDisplay = email ? (
        <div className="flex flex-col items-center text-5xl">
            <p className="text-sm">{email}</p>
        </div>
    ) : null

    const userImage = avatar ? (
        <div className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 drop-shadow-xl shadow-black mx-auto mt-8 rounded-full p-1">
            <img
                className="rounded-full"
                src={avatar}
                width={80}
                height={80}
                alt={username ?? "Profile Pic"}
            // priority={true}
            />
        </div>
    ) : (
        <ProfilePlaceHolder user={username} type="firstChar" />
    )

    return (
        <section className="flex flex-col content-center gap-4">
            {userImage}
            <div>
                {emailDisplay}
            </div>
        </section>
    )
}