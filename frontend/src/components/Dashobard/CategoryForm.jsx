import Input from "../input/Input"
import Button from "../button/Button"
import { XMarkIcon } from "@heroicons/react/24/outline";
export default function CategoryForm({ onClose, editId, onSubmit, category, setCategory }) {
    function handelChange(e) {
        setCategory(e.target.value)
    }
    return (
        <div>
            <div className="w-5" onClick={onClose}>
                <XMarkIcon className="h-5 cursor-pointer" />
            </div>
            <h1 className=" p-2 text-center text-2xl font-semibold m-3">{editId ? "update Category" : "tambah Category"}</h1>
            <form action="" onSubmit={onSubmit}>
                <div className="flex flex-col mb-2 w-90">
                    <Input labelText={"Category data"} name={"category"} type={"text"} placeholder={"Masukan Category"} value={category || ""} onChange={handelChange} />
                </div>
                <Button text={editId ? "update" : "simpan"} type={"submit"} className="bg-blue-600 text-white text-sm font-bold p-2 w-90 mt-2 cursor-pointer rounded-lg hover:bg-blue-400" />
            </form>
        </div>
    )
}