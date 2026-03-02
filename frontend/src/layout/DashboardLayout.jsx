import { Outlet } from "react-router"
import SideBar from "../components/sidebar/SideBar"
import HeaderSidebar from "../components/headerSidebar/HeaderSidebar"


export default function DasboardLayout() {
    return (
        <div className="flex flex-col h-screen">
            <HeaderSidebar />
            <div className="flex flex-1">
                <SideBar />
                <main className="flex-1">
                    <Outlet />
                </main >
            </div>
        </div>
    )
}