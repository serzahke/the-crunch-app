import Menu from "../components/dashboard/Menu"
import { UserContextProvider } from "../context/UserProvider";
import getMainUser from "../components/utils/getMainUser";
import { OrganizationContextProvider } from "../context/OrganizationProvider";

export default async function DashboardLayout({ children }: any) {
  return (
    <div className="flex flex-row gap-6">
      <UserContextProvider>
        <OrganizationContextProvider>
          <div>
            <Menu user={await getMainUser()} />
          </div>
          <div className="w-full">
            {children}
          </div>
        </OrganizationContextProvider>
      </UserContextProvider>
    </div>
  )
}
