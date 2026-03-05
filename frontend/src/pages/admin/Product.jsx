import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import ProductTabel from "../../components/Dashobard/ProductTabel";
import Modal from "../../components/modal/Modal";
import ProductFrom from "../../components/Dashobard/ProductForm";
import api from "../../service/api"

export default function Product() {
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editId, setEditId] = useState(null);
    const [form, setForm] = useState({
        name: "",
        description: "",
        image: "",
        categoreis_id: "",
        price: "",
        is_active: "",
        qty: ""
    });
    const [category, setCategory] = useState([]);
    const token = localStorage.getItem("AUTH");

    async function fetchProduct() {
        setLoading(true);
        try {
            const res = await fetch(`${api()}products`, {
                cache: "reload"
            });
            const result = await res.json();
            setProduct(result.data);
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }

    async function fetchCategory() {
        try {
            const response = await fetch(`${api()}category`, {
                cache: "reload",
                headers: { "Authorization": `Bearer ${token}` }
            })
            const result = await response.json();
            setCategory(result.data);
        } catch (error) {
            console.log("gagal mengabil data", error.message)
        }
    }

    async function handelSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("description", form.description);
        formData.append("categoreis_id", form.categoreis_id);
        formData.append("price", form.price);
        formData.append("qty", String(form.qty));
        formData.append("is_active", String(form.is_active));

        if (form.image) formData.append("image", form.image);
        try {
            let response;
            if (editId) {
                response = await fetch(`${api()}products/${editId}`, {
                    method: "PATCH",
                    body: formData,
                    headers: { "Authorization": `Bearer ${token}` }
                });
            } else {
                response = await fetch(`${api()}products`, {
                    method: "POST",
                    body: formData,
                    headers: { "Authorization": `Bearer ${token}` }
                });
            }

            if (response.ok) {
                setModal(false);
                fetchProduct();
            }
        } catch (error) {
            console.error("Gagal simpan:", error.message);
        }
    }

    useEffect(() => {
        fetchProduct()
        fetchCategory()
    }, [])

    function handelForm(productItem) {
        setModal(true)
        if (productItem && productItem.id) {
            setEditId(productItem.id);
            setForm({
                name: productItem.name || "",
                description: productItem.description || "",
                image: null,
                categoreis_id: productItem.categoreis_id || "",
                price: productItem.price || "",
                is_active: productItem.is_active ?? "",
                qty: productItem.qty ?? ""
            });
        } else {
            setEditId(null);
            setForm({
                name: "",
                description: "",
                image: "",
                categoreis_id: "",
                price: "",
                is_active: "",
                qty: ""
            })
        }
    }

    return (
        <div className="p-1 m-1">
            <div className="bg-white shadow-lg p-2 rounded-2xl">
                <div className="flex justify-end items-center">
                    <Button text={'Tambah Product'} className={'bg-blue-500 p-2 px-2 py-1 rounded-sm text-sm text-white cursor-pointer'} onSmash={() => handelForm(null)} />
                </div>
                <ProductTabel data={product} loading={loading} onEdit={handelForm} />
                {modal && (
                    <Modal>
                        <ProductFrom
                            category={category}
                            product={product}
                            onSubmit={handelSubmit}
                            onClose={() => setModal(false)}
                            editId={editId}
                            form={form}
                            setForm={setForm}
                        />
                    </Modal>
                )}
            </div>
        </div>
    )
}