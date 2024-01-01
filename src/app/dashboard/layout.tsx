import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import Menu from "../components/dashboard/Menu"

const getUser = async () => {
    const session : any = await getServerSession(authOptions);
  
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

export default async function DashboardLayout({ children } : any) {
    const { user } = await getUser()

    return (
        <div className="flex flex-row gap-6">
            <div>
                <Menu user={user} />
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}
