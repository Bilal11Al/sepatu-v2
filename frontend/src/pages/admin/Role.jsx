import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import Modal from "../../components/modal/Modal";
import RoleForm from "../../components/Dashobard/RoleForm";
import RoleTable from "../../components/Dashobard/RoleTable";
import api from "../../service/api";

export default function Role() {
    const [modal, setModal] = useState(false);
    const [dataRoles, setDataRoles] = useState([]);
    const [editId, setEditId] = useState(null);
    const [role, setRole] = useState("");
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem("AUTH");

    //fetch data role 
    async function fetchRole() {
        try {
            const response = await fetch(`${api()}roles`, {
                cache: "reload",
                headers: { "Authorization": `Bearer ${token}` }
            });
            const result = await response.json()
            setDataRoles(result.data);
        } catch (error) {
            console.log(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchRole()
    }, [])
    //function btn edit dan add
    function handelBtn(data) {
        if (data) {
            setRole(data.role)
            setModal(true);
            setEditId(data.id)
        } else {
            setRole('')
            setModal(true)
            setEditId(null)
        }
    }
    async function handelSubmit(e) {
        e.preventDefault();
        if (!role || role.trim() === "") {
            alert("Role tidak boleh kosong");
            return;
        }

        if (editId) {
            try {
                const response = await fetch(`${api()}roles/${editId}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                    body: JSON.stringify({ role })
                });
                const result = await response.json();
                if (response.ok) {
                    alert("Data berhasil diupdate");
                } else {
                    alert(result.message);
                }
            } catch (error) {
                console.log(error.message);
            }
        } else {
            try {
                const response = await fetch(`${api()}roles`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                    body: JSON.stringify({ role })
                });
                const data = await response.json();
                if (response.ok) {
                    alert("Data berhasil ditambah");
                } else {
                    alert(data.message);
                }
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchRole()
        setRole("");
        setModal(false)
    }
    async function handelDelete(id) {
        const confirmDelete = window.confirm("Apakah kamu yakin ingin menghapus user ini?");
        if (!confirmDelete) return;
        try {
            const response = await fetch(`${api()}roles/${id}`, {
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            });
            const result = await response.json();
            console.log(result)
            if (result.status === "success") {
                fetchRole()
                alert(result.message);
            } else {
                console.log(result.message);
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div className="mt-1 p-3">
            <div className="bg-white shadow-lg p-2 rounded-2xl">
                <div className="mb-2 flex justify-end items-center">
                    <Button text={"Tambah role"} className={' p-2 px-3 py-1 bg-blue-500 text-white rounded-sm cursor-pointer'} onSmash={handelBtn} />
                </div>
                <RoleTable loading={loading} dataRoles={dataRoles} onEdit={handelBtn} onDelete={handelDelete} />
                {modal && (
                    <Modal>
                        <RoleForm onClose={() => setModal(false)} role={role} setRole={setRole} editId={editId} onSubmit={handelSubmit} />
                    </Modal>
                )}
            </div>
        </div>

    )
}