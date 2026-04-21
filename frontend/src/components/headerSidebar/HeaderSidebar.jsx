import { Cog6ToothIcon, SunIcon, MoonIcon, ArrowLeftOnRectangleIcon, Bars3Icon } from "@heroicons/react/24/outline"
import { useThema } from "../../hooks/useThema";
import { useState } from "react"
import useAuth from "../../hooks/UseAuth";

// 1. Tambahkan prop toggleSidebar di sini
export default function HeaderSidebar({ toggleSidebar }) {
    const [show, setShow] = useState(false);
    const { thema, setThema } = useThema();
    const { logout, user } = useAuth();


    function handelThema() {
        setThema(prev => !prev)
    }

    function handelShow(e) {
        e.stopPropagation();
        setShow(prev => !prev);
    }

    return (
        <div className="bg-blue-500 dark:bg-gray-800 h-16 w-full flex items-center justify-between px-4 text-white shadow-md z-40">
            <div className="flex items-center gap-3">
                <button onClick={toggleSidebar} className="md:hidden p-1 hover:bg-blue-600 rounded-md">
                    <Bars3Icon className="w-6 h-6" />
                </button>
                <h1 className="text-lg font-semibold">Dashboard Admin</h1>
            </div>

            <div className="flex items-center gap-2">
                <div className="p-2 cursor-pointer hover:bg-blue-600 rounded-full transition-colors" onClick={handelThema}>
                    {thema ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
                </div>

                <div className="relative">
                    <div className="p-2 cursor-pointer hover:bg-blue-600 rounded-full transition-colors" onClick={handelShow}>
                        <Cog6ToothIcon className={`w-6 h-6 transition-transform ${show ? "rotate-90" : ''}`} />
                    </div>

                    {show && (
                        <div className="absolute top-12 right-0 bg-white dark:bg-gray-800 dark:border dark:border-gray-700 text-gray-800 dark:text-white w-56 rounded-xl shadow-2xl z-50 p-3 animate-in fade-in zoom-in duration-200">
                            <div className="px-4 py-2 border-b dark:border-gray-700 mb-2">
                                <p className="text-xs text-gray-500">Masuk sebagai</p>
                                <h1 className="text-sm font-bold truncate">{user?.username || "Anonim"}</h1>
                            </div>
                            <button
                                onClick={logout}
                                className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 rounded-lg transition-colors"
                            >
                                <ArrowLeftOnRectangleIcon className="w-5 h-5" /> Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}