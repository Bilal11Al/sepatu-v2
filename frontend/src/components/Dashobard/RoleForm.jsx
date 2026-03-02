import Input from "../input/Input"
import Button from "../button/Button"
import { XMarkIcon } from "@heroicons/react/24/outline";
export default function RoleForm({ onClose,editId,role,setRole,onSubmit }) {
    function handelChange(e) {
        setRole(e.target.value);
    }
    return (
        <>
            <div className="w-5" onClick={onClose}>
                <XMarkIcon className="h-5 cursor-pointer" />
            </div>
            <h1 className=" p-2 text-center text-2xl font-semibold m-3">{editId ? "update Role" : "tambah Role"}</h1>
            <form action="" onSubmit={onSubmit}>
                <div className="flex flex-col mb-2 w-90">
                    <Input labelText={"Role"} name={"role"} type={"text"} placeholder={"Masukan Role"} value={role} onChange={handelChange} />
                </div>
                <Button text={editId ? "update" : "simpan"} type={"submit"} className="bg-blue-600 text-white text-sm font-bold p-2 w-90 mt-2 cursor-pointer rounded-lg hover:bg-blue-400" />
            </form>
        </>
    )
}