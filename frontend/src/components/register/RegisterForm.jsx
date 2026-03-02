import { useRef, useState } from "react"
import Input from "../input/Input"
import Button from "../button/Button";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router";
import api from "../../service/api"
import { useNavigate } from "react-router";

function RegisterForm() {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });
    const formRef = useRef()
    const navigate = useNavigate()

    function handelChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handelSubmit(e) {
        e.preventDefault();
        setError("");
        setLoading(true)
        if (form.email.trim() === "" || form.password.trim() === "" || form.username.trim() === "") {
            alert("Form harus di isi");
            return;
        }
        try {
            const res = await fetch(`${api()}auth/register`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(form)
            });
            const data = await res.json();
            if (res.ok) {
                alert(data.message);
                navigate("/login")
            }
            if (!res.ok) {
                setError(data.message)
            }
        } catch (error) {
            console.log(error.message)
        } finally {
            setLoading(false)
        }
        setForm({
            username: "",
            email: "",
            password: ""
        })
        formRef.current.focus()
    }
    return (
        <form className="w-80" onSubmit={handelSubmit}>
            <span className="text-red-800 text-sm p-1 m-1">{error}</span>
            <div className="flex flex-col mb-3">
                <Input ref={formRef} type={"text"} name={"username"} labelText={"Username"} placeholder={"Masukan username anda"} value={form.username} onChange={handelChange} required={true} />
            </div>
            <div className="flex flex-col mb-3">
                <Input type={"email"} name={"email"} labelText={"Email"} placeholder={"Masukan Email anda"} value={form.email} onChange={handelChange} required={true} />
            </div>
            <div className="flex flex-col mb-3 relative">
                <Input labelText={"Password"} name={"password"} type={show ? "text" : "password"} placeholder={"Masukan password"} value={form.password} required={true} onChange={handelChange} />
                <Button type={"button"} onSmash={() => setShow(prev => !prev)} className={"absolute right-3 top-9.5 text-gray-500 hover:text-gray-700 cursor-pointer"} text={show ? (
                    <EyeSlashIcon className="w-5 h-5 " />
                ) : (
                    <EyeIcon className="w-5 h-5" />
                )} />
            </div>
            <p className="m-2 text-[12px]">Sudah punya akun? <NavLink to={"/login"} className={("text-[12px] text-blue-500 font-bold underline")}>Login Akun</NavLink></p>
            <Button disabled={loading} text={loading ? "loading..." : "login"} type={"submit"} className={`w-full bg-blue-500 py-2 text-white font-medium rounded-2xl hover:bg-blue-600 transition  cursor-pointer`} />
        </form>
    )
}

export default RegisterForm