import { Navigate, Outlet } from "react-router";
import useAuth from "../hooks/UseAuth";
import User from "../pages/admin/User";
export default function ProtectedRoute({ roleRequired }) {
    const { user } = useAuth();
    const token = localStorage.getItem("AUTH");
    if (!token) return <Navigate to="/login" />;

    if (!user) return <p>Loading...</p>;
    if (user.role_id != roleRequired) {
        return <Navigate to="/403" />;
    }


    return <Outlet />;
}