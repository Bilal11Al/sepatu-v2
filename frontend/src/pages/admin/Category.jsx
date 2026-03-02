import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Modal from "../../components/modal/Modal";
import CategoryForm from "../../components/Dashobard/CategoryForm";
import CategoryTable from "../../components/Dashobard/CategoryTabel";
import api from "../../service/api";

export default function Category() {
    const [modal, setModal] = useState(false);
    const [category, setCategory] = useState("");
    const [data, setData] = useState([]);
    const [edit, setEdit] = useState(null);
    const [loading, setLoading] = useState(true)

    const token = localStorage.getItem("AUTH");
    async function fetchCatgory() {
        try {
            const response = await fetch(`${api()}category`, {
                cache: "reload",
                headers: { "Authorization": `Bearer ${token}` }
            });
            const result = await response.json();
            setData(result.data)
        } catch (error) {
            console.log("gagal mengabil data", error.message);
        } finally {
            setLoading(false)
        }
    }

    function handelBtn(data) {
        setModal(true)
        if (data) {
            setEdit(data.id)
            setCategory(data.category)
        } else {
            setCategory('');
            setEdit(null)
        }
    }

    async function handelSubmit(e) {
        e.preventDefault();
        if (edit) {
            const data = await fetch(`${api()}category/${edit}`, {
                method: 'PATCH',
                headers: {
                    "Content-type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ category })
            })
            const response = await data.json()
            if (data.ok) {
                alert(response.message);
            }
        } else {
            const data = await fetch(`${api()}category`, {
                method: "POST",
                headers: { "Content-type": "application/json", "Authorization": `Bearer ${token}` },
                body: JSON.stringify({ category })
            })
            const response = await data.json()
            if (data.ok) {
                alert(response.message)
            }
        }
        setModal(false);
        setCategory('');
        fetchCatgory();
    }

    async function handelDelete(id) {
        const confrimDelete = window.confirm("apakah anda yakin menghapus??");
        if (!confrimDelete) return;
        try {
            const res = await fetch(`http://localhost:4000/api/category/${id}`, {
                headers: { "Authorization": `Bearer ${token}` },
                method: 'DELETE'
            });
            const data = await res.json();
            if (res.ok) {
                alert(data.message);
                fetchCatgory();
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        fetchCatgory()
    }, [])

    return (
        <div className="mt-1 p-2">
            <div className="p-1 flex justify-end items-center">
                <Button text={"Tambah Category"} className={'bg-blue-500 p-2 px-2 py-1 text-white  rounded-sm cursor-pointer'} onSmash={handelBtn} />
            </div>
            <CategoryTable data={data} onEdit={handelBtn} loading={loading} onDelete={handelDelete} />
            {modal && (
                <Modal>
                    <CategoryForm onClose={() => setModal(false)} category={category} setCategory={setCategory} editId={edit} onSubmit={handelSubmit} />
                </Modal>
            )}
        </div>
    )
}