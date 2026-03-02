import { Cog6ToothIcon, SunIcon, MoonIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline"
import { useThema } from "../../hooks/useThema";
import { useState } from "react"
import useAuth from "../../hooks/UseAuth";
export default function HeaderSidebar() {
    const [show, setShow] = useState(false);
    const { thema, setThema } = useThema();
    const { logout, user } = useAuth()
    function handelThema() {
        setThema(prev => !prev)
    }
    function handelShow(e) {
        e.stopPropagation();
        setShow(prev => !prev);
    }
    return (
        <div className="bg-blue-500 dark:bg-gray-800 h-14 w-full flex items-center px-4 text-white relative z-10">
            <div className="w-full flex justify-between items-center">
                <h1 className="p-2 text-lg font-semibold">Dashboard Admin</h1>
                <div className="flex items-center">
                    <div className="p-1 cursor-pointer" onClick={handelThema}>
                        {thema ? <MoonIcon className="w-5 h-5 text-white" /> : <SunIcon className="w-5 h-5 text-white" />}
                    </div>
                    <div className="p-2 cursor-pointer  " onClick={handelShow}>
                        <Cog6ToothIcon className={`text-white p-2 h-10  transition-transform ${show ? "rotate-180" : ''} `} />
                    </div>
                </div>
            </div>
            {show && (
                <div className="absolute top-11 right-11 bg-black dark:bg-white dark:text-black  text-white w-48 rounded-2xl rounded-tr-none shadow-lg z-50 p-3 ">
                    <h1 className="text-sm">selamat datang {user?.username || "Ananonim"}</h1>
                    <button onClick={logout} className=" flex items-center gap-1.5 w-30 text-left px-4 py-2 hover:bg-blue-700 dark:hover:bg-gray-300 rounded-sm">
                        < ArrowLeftOnRectangleIcon className="w-5 h-5 " />Logout
                    </button>
                </div>
            )}
        </div>
    )
} 