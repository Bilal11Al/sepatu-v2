import { useState } from "react"; // Tambahkan useState
import { NavLink } from "react-router";
import {
    ArrowRightEndOnRectangleIcon,
    ShoppingCartIcon,
    Bars3Icon,
    XMarkIcon
} from "@heroicons/react/24/outline";
import useAuth from "../../hooks/UseAuth";

function Navbar() {
    const { user, logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false); // State untuk menu mobile

    const activee = ({ isActive }) =>
        `relative px-2 py-1 transition-all duration-300
    ${isActive
            ? "text-blue-400 after:w-full"
            : "text-black hover:text-blue-400 after:w-0"}
    after:absolute after:left-0 after:-bottom-1
    after:h-[3px] after:bg-blue-400
    after:transition-all after:duration-300`;

    return (
        <nav className="bg-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-7xl mx-auto px-5 py-4">
                <div className="flex items-center justify-between">
                    <p className="text-xl font-bold tracking-wide text-black">
                        Logo
                    </p>

                    <div className="hidden md:flex gap-8 text-lg font-medium">
                        <NavLink to="/" className={activee}>Home</NavLink>
                        <NavLink to="/about" className={activee}>About</NavLink>
                        <NavLink to="/product" className={activee}>Product</NavLink>
                        <NavLink to="/contact" className={activee}>Contact</NavLink>
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        {user ? (
                            <div className="flex items-center gap-6">
                                <span className="text-sm font-semibold text-gray-700">
                                    Hi, <span className="text-blue-500">{user.username}</span>
                                </span>
                                <div className="relative">
                                    <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600 transition shadow-sm">
                                        <ShoppingCartIcon className="h-5 w-5" />
                                        Cart
                                    </button>
                                    <span className="absolute -top-2 -right-2 text-[10px] font-bold text-white bg-red-600 rounded-full w-5 h-5 flex items-center justify-center">0</span>
                                </div>
                                <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition">
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <NavLink to="/login" className="bg-blue-500 px-5 py-2 rounded-md text-white font-semibold hover:bg-blue-600 transition flex items-center gap-2">
                                <ArrowRightEndOnRectangleIcon className="w-5 h-5" /> Login
                            </NavLink>
                        )}
                    </div>

                    <div className="md:hidden flex items-center ">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none cursor-pointer">
                            {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
                        </button>
                    </div>
                </div>

                <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-4 pb-4 border-t border-gray-200`}>
                    <div className="flex flex-col gap-4 pt-4">
                        <NavLink to="/" onClick={() => setIsOpen(false)} className="text-black font-medium hover:text-blue-500">Home</NavLink>
                        <NavLink to="/about" onClick={() => setIsOpen(false)} className="text-black font-medium hover:text-blue-500">About</NavLink>
                        <NavLink to="/product" onClick={() => setIsOpen(false)} className="text-black font-medium hover:text-blue-500">Product</NavLink>
                        <NavLink to="/contact" onClick={() => setIsOpen(false)} className="text-black font-medium hover:text-blue-500">Contact</NavLink>

                        <hr className="border-gray-300" />

                        {user ? (
                            <div className="flex flex-col gap-4">
                                <p className="text-sm font-semibold">Welcome, {user.username}</p>
                                <button className="flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-3 rounded-xl">
                                    <ShoppingCartIcon className="h-5 w-5" /> Cart (0)
                                </button>
                                <button onClick={logout} className="bg-red-500 text-white py-3 rounded-xl font-bold">
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <NavLink to="/login" onClick={() => setIsOpen(false)} className="bg-blue-500 text-white py-3 rounded-xl text-center font-bold">
                                Login
                            </NavLink>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;