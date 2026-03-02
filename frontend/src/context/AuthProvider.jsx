import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import api from "../service/api";
import { useNavigate } from "react-router";

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("AUTH"));
    const navigite = useNavigate();

    useEffect(() => {
        if (!token) {
            setUser(null);
            return;
        }

        async function fetchUser() {
            try {
                const res = await fetch(`${api()}me`, {
                    cache: "reload",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!res.ok) throw new Error("Unauthorized");

                const data = await res.json();
                setUser(data);
            } catch (err) {
                console.error(err);
                logout();
            }
        }

        fetchUser();
    }, [token]);

    function login(newToken) {
        localStorage.setItem("AUTH", newToken);
        setToken(newToken);
    }

    function logout() {
        localStorage.removeItem("AUTH");
        setToken(null);
        setUser(null);
        navigite("/login")
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;