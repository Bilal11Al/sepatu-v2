import { XMarkIcon } from "@heroicons/react/24/outline";
import Input from "../input/Input"
import Button from "../button/Button"

export default function ProductFrom({ onClose, onSubmit, editId, form, setForm,  category }) {
    function handelChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    function handelChangeFile(e) {
        setForm({ ...form, image: e.target.files[0] });
    }

    const BASE_URL = `http://localhost:4000/upload/`;

    return (
        <div className="w-full">
            <div className="flex justify-start mb-2" onClick={onClose}>
                <XMarkIcon className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-800" />
            </div>

            <h1 className="text-2xl font-bold text-center mb-6">
                {editId ? "Update Product" : "Simpan Product"}
            </h1>

            <form onSubmit={onSubmit} encType="multipart/form-data" className="space-y-4">

                <div className="w-full">
                    <Input labelText={"Nama Produk"} name={"name"} type={"text"} placeholder={"Masukan nama produk"} value={form.name || ""} onChange={handelChange} />
                </div>

                <div className="w-full">
                    <label className="block text-sm font-medium mb-1">Kategori</label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500" name="categoreis_id" value={form.categoreis_id || ""} onChange={handelChange}>
                        <option value="">---Pilih kategori----</option>
                        {category.map((c) => (
                            <option key={c.id} value={c.id}>{c.category}</option>
                        ))}
                    </select>
                </div>

                {/* Status */}
                <div className="w-full">
                    <label className="block text-sm font-medium mb-1">Status</label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500" name="is_active" value={String(form.is_active ?? "")} onChange={handelChange}>
                        <option value="">--Pilih Status--</option>
                        <option value="1">Active</option>
                        <option value="0">Non Active</option>
                    </select>
                </div>

                <div className="w-full">
                    <label className="block text-sm font-medium mb-1">Deskripsi</label>
                    <textarea className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500" name="description" value={form.description || ""} rows="3" onChange={handelChange}></textarea>
                </div>

                <div className="w-full">
                    <Input labelText={"Gambar Produk"} name={"image"} image={"image/*"} type={"file"} onChange={handelChangeFile} />
                    {editId && form.image && (
                        <div className="mt-2">
                            <img src={typeof form.image === 'string' ? BASE_URL + form.image : URL.createObjectURL(form.image)} width="80px" className="rounded shadow-sm" alt="Preview" />
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="w-full">
                        <Input labelText={"Harga"} name={"price"} type={"number"} placeholder={"0"} value={form.price || ""} onChange={handelChange} />
                    </div>
                    <div className="w-full">
                        <Input labelText={"Qty"} name={"qty"} type={"number"} placeholder={"0"} value={form.qty ?? ""} onChange={handelChange} />
                    </div>
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 mt-4 transition-all">
                    {editId ? "Update Product" : "Simpan Product"}
                </button>
            </form>
        </div>
    )
}