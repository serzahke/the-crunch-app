"use client"

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UploadButton, UploadDropzone } from "../../utils/uploadthing";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";


const ProfileFormEdit = ({ user }: any) => {
    const { data: session, update }: any = useSession();
    const [newUsername, setNewUsername] = useState(user.username);
    const [newEmail, setNewEmail] = useState(user.email);
    const [newPassword, setNewPassword] = useState(user.password);
    const [openPassword, setOpenPassword] = useState(false);

    console.log('user', user)
    console.log('user.username', user.username)

    useEffect(() => {
        setNewEmail(session?.user?.email || '');

    }, [session]);

    const router = useRouter();

    async function updateSession(): Promise<void> {
        await update({
            ...session,
            user: {
                ...session?.user,
                email: newEmail
            }
        })
    }


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await fetch(`/api/users/${session?.user?.id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    newEmail: newEmail,
                }),
            });

            if (!res.ok) {
                throw new Error('Failed to update a profile.');
            }

            updateSession()
            router.refresh()
            location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <div className="flex flex-row gap-6">
                    <div className="flex flex-col w-full border border-base-200 rounded-2xl p-4">
                        <main className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Upload Your Avatar</span>
                            </div>
                            <UploadDropzone
                                className="bg-slate-100 dark:bg-slate-600 dark:bg-opacity-10 dark:border-gray-600 ut-label:text-lg ut-allowed-content:ut-uploading:text-red-300"
                                endpoint="imageUploader"
                                onClientUploadComplete={(res) => {
                                    // Do something with the response
                                    console.log("Files: ", res);
                                    alert("Upload Completed");
                                }}
                                onUploadError={(error: Error) => {
                                    // Do something with the error.
                                    alert(`ERROR! ${error.message}`);
                                }}
                            />
                        </main>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Username</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setNewUsername(e.target.value)}
                                value={newUsername}
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                                onChange={(e) => setNewEmail(e.target.value)}
                                value={newEmail}
                            />
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Password</span>
                            </div>
                            <div className="relative">
                                <input
                                    type={openPassword == false ? "password" : "text"}
                                    placeholder="Enter new Password"
                                    className="input input-bordered w-full max-w-xs"
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                                <div className="absolute top-3 right-3 cursor-pointer" onClick={() => setOpenPassword(!openPassword)}>
                                    {openPassword == false ?
                                        <EyeIcon className="h-6 w-6"  /> :
                                        <EyeSlashIcon className="h-6 w-6 "/>
                                    }
                                </div>
                            </div>
                        </label>

                        <div className='w-full max-w-xs mt-4'>
                            <button type='submit' className='btn btn-primary' >Update</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ProfileFormEdit;
