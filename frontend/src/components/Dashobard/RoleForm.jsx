import Input from "../input/Input"
import Button from "../button/Button"
import { XMarkIcon } from "@heroicons/react/24/outline";
export default function RoleForm({ onClose, editId, role, setRole, onSubmit }) {
    function handelChange(e) {
        setRole(e.target.value);
    }

    return (
        <div className="w-full">
            <div className="flex justify-start mb-2" onClick={onClose}>
                <XMarkIcon className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-800" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
                {editId ? "Update Role" : "Tambah Role"}
            </h1>
            <form onSubmit={onSubmit} className="space-y-4">
                <div className="w-full">
                    <Input
                        labelText={"Nama Role"}
                        name={"role"}
                        type={"text"}
                        placeholder={"Contoh: Admin"}
                        value={role}
                        onChange={handelChange}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-all active:scale-[0.98] mt-2"
                >
                    {editId ? "Update Role" : "Simpan Role"}
                </button>
            </form>
        </div>
    )
}