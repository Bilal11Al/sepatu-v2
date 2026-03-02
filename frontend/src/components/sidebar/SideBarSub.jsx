import { NavLink } from "react-router";
export default function SideBarSub({ link, linkText }) {
    return (
        <div className="ml-7 mt-2 space-y-2 text-sm">
            <NavLink
                to={link}
                className="block p-2 rounded-sm hover:bg-blue-400"
            >
                {linkText}
            </NavLink>
        </div>

    )
}