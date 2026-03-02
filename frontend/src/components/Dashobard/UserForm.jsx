import Input from "../input/Input"
import Button from "../button/Button"
import { XMarkIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function UserForm({ data, setData, onClose, onSubmit, editId, role }) {
    const [show, setShow] = useState(false);
    //ini function buat menentukan handelchange masing masih input
    function handelChange(e) {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }))
    }
    return (
        <>
            <div className="w-5" onClick={onClose}>
                <XMarkIcon className="h-5 cursor-pointer" />
            </div>
            <h1 className=" p-2 text-center text-2xl font-semibold m-3">{editId ? "update user" : "tambah user"}</h1>
            <form action="" onSubmit={onSubmit}>
                <div className="flex flex-col mb-2 w-90">
                    <Input labelText={"Username"} name={"username"} type={"text"} placeholder={"Masukan username"} value={data.username} onChange={handelChange} />
                </div>
                <div className="flex flex-col mb-2 w-90">
                    <Input labelText={"Email"} name={"email"} type={"text"} placeholder={"Masukan Email"} value={data.email} onChange={handelChange} />
                </div>
                <div className="flex flex-col mb-2 w-90 relative">
                    <Input labelText={"Password"} name={"password"} type={show ? "text" : "password"} placeholder={"Masukan Password"} value={data.password} onChange={handelChange} />
                    <Button type={"button"} onSmash={() => setShow(prev => !prev)} className={"absolute inset-y-9 right-3  text-gray-500 hover:text-gray-700 cursor-pointer"} text={show ? (
                        <EyeSlashIcon className="w-5 h-5 " />
                    ) : (
                        <EyeIcon className="w-5 h-5" />
                    )} />
                </div>
                <div className="flex flex-col mb-2 w-90">
                    <label htmlFor="">Role</label>
                    <select name="role_id" id="" className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300" value={Number(data.role_id)} onChange={handelChange}>
                        <option value="">--Pilih role--</option>
                        {role.map((roles) => (
                            <option key={roles.id} value={Number(roles.id)}>{roles.role}</option>
                        ))}
                    </select>
                </div>
                <Button text={editId ? "update" : "simpan"} type={"submit"} className="bg-blue-600 text-white text-sm font-bold p-2 w-90 mt-2 cursor-pointer rounded-lg hover:bg-blue-400" />
            </form>
        </>
    )
}