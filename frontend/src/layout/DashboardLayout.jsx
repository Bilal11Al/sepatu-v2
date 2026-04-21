import { useState } from "react";
import { Outlet } from "react-router";
import SideBar from "../components/sidebar/SideBar";
import HeaderSidebar from "../components/headerSidebar/HeaderSidebar";

export default function DasboardLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="flex flex-col h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
            <HeaderSidebar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

            <div className="flex flex-1 overflow-hidden relative">
                {isSidebarOpen && (
                    <div
                        className="md:hidden absolute inset-0 bg-black/50 z-30"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}
                <div className={`
                    fixed md:relative z-40 h-full transition-all duration-300
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
                `}>
                    <SideBar isOpen={isSidebarOpen} />
                </div>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto p-4 md:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}