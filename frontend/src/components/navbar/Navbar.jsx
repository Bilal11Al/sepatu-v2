import { NavLink } from "react-router"
import { ArrowRightEndOnRectangleIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"
import useAuth from "../../hooks/UseAuth"

function Navbar() {
    const { user, logout } = useAuth();
    const activee = ({ isActive }) =>
        `relative px-2 py-1 transition-all duration-300
   ${isActive
            ? "text-blue-400 after:w-full"
            : "text-black hover:text-blue-400 after:w-0"}
   after:absolute after:left-0 after:-bottom-1
   after:h-[3px] after:bg-blue-400
   after:transition-all after:duration-300`
    return (
        <nav className="px-5 mb-3 bg-gray-100">
            <div className="text-black px-6 py-4 rounded-lg">
                <div className="flex items-center justify-between">
                    <p className="text-xl font-bold tracking-wide">
                        Logo
                    </p>
                    <div className="flex gap-6 text-lg font-medium">
                        <NavLink to="/" className={activee}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={activee}>
                            About
                        </NavLink>
                        <NavLink to="/product" className={activee}>
                            Product
                        </NavLink>
                        <NavLink to="/contact" className={activee}>
                            Contact
                        </NavLink>
                    </div>

                    {user ? (
                        <div className="flex justify-center items-center gap-6 p-4 rounded-xl">
                            <span className="text-sm font-semibold text-gray-700">
                                Welcome, <span className="text-blue-500">{user.username}</span>
                            </span>
                            <div className="relative">
                                <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600 transition duration-200 shadow-sm">
                                    <ShoppingCartIcon className="h-5 w-5" />
                                    Cart
                                </button>
                                <span className="absolute -top-2 -right-2 text-xs font-semibold text-white bg-red-600 rounded-full w-5 h-5 flex items-center justify-center">
                                    0
                                </span>
                            </div>

                            <button
                                onClick={logout}
                                className="px-4 py-2 cursor-pointer bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition duration-200 shadow-sm"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <NavLink
                            to="/login"
                            className="bg-blue-500 px-4 py-2 rounded-md
        text-white font-semibold
        hover:bg-blue-600 transition flex justify-center items-center"
                        >
                            <ArrowRightEndOnRectangleIcon className="w-5 h-5" />
                            Login
                        </NavLink>
                    )}
                </div>
            </div>
        </nav >
    )
}

export default Navbar