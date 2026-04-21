import { useState } from "react";
import { NavLink } from "react-router-dom"; // Pastikan import dari react-router-dom
import SiderBarHeader from "./SidebarHeader";
import { FolderOpenIcon, BanknotesIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import SideBarSub from "./SideBarSub";

function SideBar({ isOpen }) { // Tambahkan prop isOpen untuk kontrol dari parent
    const [open, setOpen] = useState(null);

    return (
        <div className={`
            bg-blue-500 dark:bg-gray-800 text-white h-full transition-all duration-300
            ${isOpen ? "w-64" : "w-0 md:w-64"} overflow-hidden
        `}>
            <div className="w-64">
                <div className="mt-3 px-2">
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) => `
                            flex items-center gap-2 p-2 rounded-sm transition-colors
                            ${isActive ? "bg-blue-600" : "hover:bg-blue-400"}
                        `}
                    >
                        <ChartBarIcon className="h-5 w-5" />
                        <span>Dashboard</span>
                    </NavLink>
                </div>


                <div className="mt-3 px-2">
                    <SiderBarHeader
                        icon={<FolderOpenIcon className="h-5 w-5" />}
                        text="Master Data"
                        open={open === 'masterData'}
                        onSmahs={() => setOpen(prev => (prev === 'masterData' ? null : 'masterData'))}
                    />
                    {open === 'masterData' && (
                        <div className="ml-4 border-l border-blue-400 mt-1">
                            <SideBarSub link="/dashboard/user" linkText="User Data" />
                            <SideBarSub link="/dashboard/role" linkText="Role Data" />
                            <SideBarSub link="/dashboard/category" linkText="Category Data" />
                            <SideBarSub link="/dashboard/product" linkText="Product Data" />
                        </div>
                    )}
                </div>

                <div className="mt-3 px-2">
                    <SiderBarHeader
                        icon={<BanknotesIcon className="h-5 w-5" />}
                        text="Transaction"
                        open={open === 'transaction'}
                        onSmahs={() => setOpen(prev => (prev === 'transaction' ? null : 'transaction'))}
                    />
                    {open === 'transaction' && (
                        <div className="ml-4 border-l border-blue-400 mt-1">
                            <SideBarSub link="/dashboard" linkText="Order" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SideBar;