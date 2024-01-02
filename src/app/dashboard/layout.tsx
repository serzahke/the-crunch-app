import Menu from "../components/dashboard/Menu"
import { UserContextProvider } from "../context/UserProvider";
import getMainUser from "../components/utils/getMainUser";
import { OrganizationContextProvider } from "../context/OrganizationProvider";
import NextBreadcrumb from "../components/client/NextBreadcrumb";


export default async function DashboardLayout({ children }: any) {
  return (
    <div className="flex flex-row gap-6">
      <UserContextProvider>
        <OrganizationContextProvider>
          <div>
            <Menu user={await getMainUser()} />
          </div>
          <div className="w-full">
            <div className="mb-2">
            <NextBreadcrumb
              homeElement={'Home'}
              separator={<span> | </span>}
              activeClasses='text-primary'
              containerClasses='flex'
              listClasses='hover:underline mx-2 font-normal text-sm'
              capitalizeLinks
            />
            </div>
            {children}
          </div>
        </OrganizationContextProvider>
      </UserContextProvider>
    </div>
  )
}
