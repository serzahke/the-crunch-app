import Menu from "../components/dashboard/Menu"


export default function DashboardLayout({ children } : any) {
    return (
        <div className="flex flex-row gap-6">
            <div>
                <Menu />
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    )
}
