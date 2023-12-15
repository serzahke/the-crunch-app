const ProfilePlaceHolder = ({ user }: any, type: "image" | "firstChar") => {
    return (
        <div className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 drop-shadow-xl shadow-black mx-auto mt-8 rounded-full p-1">
            {
                type == "image" ?
                    <img
                        className="w-20 h-20 rounded-full"
                        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    /> :
                    <div className="avatar placeholder">
                        <div className="w-20 h-20 bg-neutral text-neutral-content rounded-full">
                            <span className="text-3xl">
                                {user?.name?.charAt(0).toUpperCase() ?? "U"}
                            </span>
                        </div>
                    </div>
            }
        </div>
    )
}

export default ProfilePlaceHolder