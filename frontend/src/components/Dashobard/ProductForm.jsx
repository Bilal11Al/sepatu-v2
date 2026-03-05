import { XMarkIcon } from "@heroicons/react/24/outline";
import Input from "../input/Input"
import Button from "../button/Button"
export default function ProductFrom({ onClose, onSubmit, editId, form, setForm, product, category }) {
    function handelChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    }
    function handelChangeFile(e) {
        setForm({ ...form, image: e.target.files[0] });
    }
    const BASE_URL = `http://localhost:4000/upload/`;
    return (
        <div>
            <div className="w-5" onClick={onClose}>
                <XMarkIcon className="h-5 cursor-pointer" />
            </div>
            <div className="text-center text-2xl m-2">
                <h1 className="font-semibold">{editId ? "Update Product" : "Simpan Product"}</h1>
            </div>
            <form action="" onSubmit={onSubmit} encType="multipart/form-data">
                <div className="flex flex-col mb-2 w-90">
                    <Input labelText={"Product Nama"} name={"name"} type={"text"} placeholder={"Masukan Product Name"} value={form.name || ""} onChange={handelChange} />
                </div>
                <div className="flex flex-col mb-2 w-90">
                    <label htmlFor="">Kategori</label>
                    <select className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300" name="categoreis_id" value={form.categoreis_id} onChange={handelChange}>
                        <option value="">---Pilih kategori----</option>
                        {category.map((c) => (
                            <option key={c.id} value={c.id}>{c.category}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col mb-2 w-90">
                    <label htmlFor="">Is active</label>
                    <select className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300" name="is_active" value={String(form.is_active || "")} onChange={handelChange}>
                        <option value="">--Pilih---</option>
                        <option value="1">Active</option>
                        <option value="0">Non Active</option>
                    </select>
                </div>
                <div className="flex flex-col mb-2 w-90">
                    <label htmlFor="">Deskrpsi</label>
                    <textarea className="border rounded px-2 py-2 focus:outline-none focus:ring-2 focus:ring-green-300" name="description" value={form.description} cols="30" onChange={handelChange}></textarea>
                </div>
                <div className="flex flex-col mb-2 w-90">
                    <Input labelText={"Product Gambar"} name={"image"} image={"image/*"} type={"file"} placeholder={"Masukan Product Name"} onChange={handelChangeFile} />
                    {editId ? <img src={BASE_URL + product.find(p => p.id === editId)?.image} width="80px" /> : ""}

                </div>
                <div className="flex flex-col mb-2 w-90">
                    <Input labelText={"Product Harga"} name={"price"} type={"number"} placeholder={"Masukan Product Name"} value={form.price} onChange={handelChange} />
                </div>
                <div className="flex flex-col mb-2 w-90">
                    <Input labelText={"Product qty"} name={"qty"} type={"number"} placeholder={"Masukan Product Name"} value={form.qty ?? ""} onChange={handelChange} />
                </div>
                <Button text={editId ? "update" : "simpan"} type={"submit"} className="bg-blue-600 text-white text-sm font-bold p-2 w-90 mt-2 cursor-pointer rounded-lg hover:bg-blue-400" />
            </form>
        </div>
    )
}