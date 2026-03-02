import { XMarkIcon } from "@heroicons/react/24/outline";
import Input from "../input/Input"
import Button from "../button/Button"
export default function ProductFrom({ onClose, onSubmit, editId }) {
    return (
        <div>
            <div className="w-5" onClick={onClose}>
                <XMarkIcon className="h-5 cursor-pointer" />
            </div>

            <form action="" onSubmit={onSubmit}>
                <div className="flex flex-col mb-2 w-90">
                    <Input labelText={"Category data"} name={"category"} type={"text"} placeholder={"Masukan Category"} />
                </div>
                <Button text={editId ? "update" : "simpan"} type={"submit"} className="bg-blue-600 text-white text-sm font-bold p-2 w-90 mt-2 cursor-pointer rounded-lg hover:bg-blue-400" />
            </form>
        </div>
    )
}