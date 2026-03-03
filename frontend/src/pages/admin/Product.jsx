import { Activity, useEffect, useState } from "react";
import Button from "../../components/button/Button";
import ProductTabel from "../../components/Dashobard/ProductTabel";
import Modal from "../../components/modal/Modal";
import ProductFrom from "../../components/Dashobard/ProductForm";
import api from "../../service/api"

export default function Product() {
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editId, setEditId] = useState(null)

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

    useEffect(() => {
        fetchProduct()
    }, [])



    function handelForm(data) {
        setModal(true)
        if (data) {
            setEditId(data.id)
        } else {
            setEditId(null)
        }

    }
    return (
        <div className="p-1 m-1">
            <div className="bg-white shadow-lg p-2 rounded-2xl">
                <div className="flex justify-end items-center">
                    <Button text={'Tambah Product'} className={'bg-blue-500 p-2 px-2 py-1 rounded-sm text-sm text-white cursor-pointer'} onSmash={handelForm} />
                </div>
                <ProductTabel data={product} loading={loading} onEdit={handelForm} />
                {modal && (
                    <Modal>
                        <ProductFrom onClose={() => setModal(false)} editId={editId} />
                    </Modal>
                )}
            </div>
        </div>
    )
}