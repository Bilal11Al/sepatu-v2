import Input from "../input/Input"
import Button from "../button/Button"
import { XMarkIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function UserForm({ data, setData, onClose, onSubmit, editId, role }) {
    const [show, setShow] = useState(false);

    function handelChange(e) {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }))
    }

    return (
        // Wrapper utama: Pastikan tidak ada class lebar yang aneh
        <div className="w-full">
            
            {/* Header: Tombol Close & Judul */}
            <div className="flex items-center mb-6">
                <button 
                    type="button"
                    onClick={onClose} 
                    className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <XMarkIcon className="h-6 w-6 text-gray-500" />
                </button>
                <h1 className="flex-1 text-center text-xl font-bold text-gray-800 pr-6">
                    {editId ? "Update User" : "Tambah User"}
                </h1>
            </div>

            {/* Form: Gunakan block agar tidak berantakan */}
            <form onSubmit={onSubmit} className="block space-y-4">
                
                <div className="block w-full">
                    <Input labelText={"Username"} name={"username"} type={"text"} placeholder={"Masukan username"} value={data.username} onChange={handelChange} />
                </div>
                
                <div className="block w-full">
                    <Input labelText={"Email"} name={"email"} type={"email"} placeholder={"Masukan Email"} value={data.email} onChange={handelChange} />
                </div>

                <div className="block w-full relative">
                    <Input labelText={"Password"} name={"password"} type={show ? "text" : "password"} placeholder={"Masukan Password"} value={data.password} onChange={handelChange} />
                    <button 
                        type="button" 
                        onClick={() => setShow(!show)} 
                        className="absolute right-3 top-8.5 p-1 text-gray-500"
                    >
                        {show ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                    </button>
                </div>

                <div className="block w-full">
                    <label className="text-sm font-medium mb-1 block">Role</label>
                    <select 
                        name="role_id" 
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500" 
                        value={Number(data.role_id) || ""} 
                        onChange={handelChange}
                    >
                        <option value="">-- Pilih Role --</option>
                        {role.map((roles) => (
                            <option key={roles.id} value={Number(roles.id)}>{roles.role}</option>
                        ))}
                    </select>
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-lg hover:bg-blue-700 mt-2"
                >
                    {editId ? "Update" : "Simpan"}
                </button>
            </form>
        </div>
    )
}