import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Button from "../button/Button";
import Input from "../input/Input";
import { NavLink } from "react-router";
import api from "../../service/api";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/UseAuth";


function LoginForm() {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth()
    const navigite = useNavigate();
    async function handelSubmit(e) {
        e.preventDefault();
        setError("")
        setLoading(true)
        try {
            const res = await fetch(`${api()}auth/login`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (res.ok) {
                alert(data.message);
                login(data.token)
                const me = await fetch(`${api()}me`, {
                    headers: {
                        Authorization: `Bearer ${data.token}`,
                    },
                })
                const datas = await me.json()
                if (datas.role !== "admin") {
                    navigite("/")
                } else {
                    navigite("/dashboard")
                }
            }
            if (!res.ok) {
                setError(data.message)
                setPassword("")
            }
        } catch (error) {
            console.log(error.message)

        } finally {
            setLoading(false)
        }
    }
    return (
        <form className="w-80" onSubmit={handelSubmit}>
            <span className="text-red-800 text-sm p-1 m-1">{error}</span>
            <div className="flex flex-col mb-3">
                <Input labelText={"Email"} name={"email"} type={"email"} placeholder={"Masukan email"} value={email} onChange={(e) => setEmail(e.target.value)} required={true} />
            </div>
            <div className="flex flex-col mb-3 relative">
                <Input labelText={"Password"} name={"password"} type={show ? "text" : "password"} placeholder={"Masukan password"} value={password} onChange={(e) => setPassword(e.target.value)} required={true} />
                <Button type={"button"} onSmash={() => setShow(prev => !prev)} className={"absolute right-3 top-9.5 text-gray-500 hover:text-gray-700 cursor-pointer"} text={show ? (
                    <EyeSlashIcon className="w-5 h-5" />
                ) : (
                    <EyeIcon className="w-5 h-5" />
                )} />
            </div>
            <p className="m-2 text-[12px]">Belum punya akun? <NavLink to={"/register"} className={("text-[12px] text-blue-500 font-bold underline")}>Register Akun</NavLink></p>
            <Button disabled={loading} text={loading ? "loading..." : "login"} type={"submit"} className={'w-full bg-blue-500 py-2 text-white font-medium rounded-2xl hover:bg-blue-600 transition cursor-pointer'} />
        </form>

    )
}


export default LoginForm