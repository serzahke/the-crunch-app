import Menu from "../components/dashboard/Menu"
import { UserContextProvider } from "../context/UserProvider";
import getMainUser from "../components/utils/getMainUser";

export default async function DashboardLayout({ children }: any) {
  return (
    <div className="flex flex-row gap-6">
      <UserContextProvider>
        <div>
          <Menu user={await getMainUser()} />
        </div>
        <div className="w-full">
          {children}
        </div>
      </UserContextProvider>
    </div>
  )
}
