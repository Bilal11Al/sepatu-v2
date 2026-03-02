import { useState } from "react"
import { NavLink } from "react-router";
import SiderBarHeader from "./SidebarHeader";
import { FolderOpenIcon, BanknotesIcon, ChartBarIcon } from "@heroicons/react/24/outline"
import SideBarSub from "./SideBarSub";

function SideBar() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="bg-blue-500 dark:bg-gray-800 w-64 p-1 text-white z-50">
                <div className="mt-3 px-2">
                    <NavLink
                        to="/dashboard"
                        className="flex items-center gap-2 p-2 rounded-sm hover:bg-blue-400"
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
                        onSmahs={() =>
                            setOpen(prev => (prev === 'masterData' ? null : 'masterData'))
                        }
                    />
                    {open === 'masterData' && (
                        <>
                            <SideBarSub link="/dashboard/user" linkText="User Data" />
                            <SideBarSub link="/dashboard/role" linkText="Role Data" />
                            <SideBarSub link="/dashboard/category" linkText="Category Data" />
                            <SideBarSub link="/dashboard/product" linkText="Product Data" />
                        </>
                    )}
                </div>
                <div className="mt-3 px-2">
                    <SiderBarHeader
                        icon={<BanknotesIcon className="h-5 w-5" />}
                        text="Transaction"
                        open={open === 'transaction'}
                        onSmahs={() =>
                            setOpen(prev => (prev === 'transaction' ? null : 'transaction'))
                        }
                    />
                    {open === 'transaction' && (
                        <SideBarSub link="/dashboard" linkText="Order" />
                    )}
                </div>

            </div>
        </>

    )
}

export default SideBar