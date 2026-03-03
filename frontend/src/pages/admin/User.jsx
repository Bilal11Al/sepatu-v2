import { useEffect, useState } from "react"
import Button from "../../components/button/Button";
import UserTable from "../../components/Dashobard/UserTabel";
import Modal from "../../components/modal/Modal";
import UserForm from "../../components/Dashobard/UserForm";
import api from "../../service/api";

function User() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [EditId, setEditId] = useState(null);
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        role_id: ""
    })
    const [role, setRole] = useState([]);
    const token = localStorage.getItem("AUTH");
    // mengabil seluruh role
    async function fetchRole() {
        const res = await fetch(`${api()}roles`, {
            cache: "reload",
            headers: { "Authorization": `Bearer ${token}` }
        });
        const resulth = await res.json()
        setRole(resulth.data)
    }
    // action buat tombol tambah user
    function handelAdd() {
        setData({ username: "", email: "", password: "", role_id: "" });
        setEditId(null);
        setModal(true);
    }
    //action buat tombol edit dan parameter bersal dari tabel user
    const handleEdit = (userData) => {
        setData({
            username: userData.username || "",
            email: userData.email || "",
            password: "",
            role_id: userData.role_id || ""
        });
        setEditId(userData.id);
        setModal(true);
    };
    // ini function fetch data user
    async function fetchUser() {
        try {
            const response = await fetch(`${api()}users`, {
                cache: "reload",
                headers: { "Authorization": `Bearer ${token}` }
            });
            const resulth = await response.json();
            setUser(resulth.data);
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchRole()
        fetchUser()
    }, []);

    //ini function buat tombol di form kalo ada id nya update kalo ga ada id nya berati insert
    async function handelSubmit(e) {
        e.preventDefault();
        if (EditId) {
            await fetch(`${api()}users/${EditId}`, {
                method: 'PATCH',
                headers: { "Content-type": "application/json", "Authorization": `Bearer ${token}` },
                body: JSON.stringify(data)
            })
        } else {
            const response = await fetch(`${api()}users`, {
                method: "POST",
                headers: { "Content-type": "application/json", "Authorization": `Bearer ${token}` },
                body: JSON.stringify(data)
            })
            const result = await response.json();
            if (!response.ok) {
                if (response.status === 400) {
                    alert("email sudah di gunakan")
                } else {
                    alert(result.message)
                }
            }
        }
        setModal(false);
        setData({ username: "", email: "", password: "", role_id: "" });
        setEditId(null);
        fetchUser();
    }
    //function handel delete parameter dari tabel yg sudah di map
    async function handleDelete(id) {
        const confirmDelete = window.confirm("Apakah kamu yakin ingin menghapus user ini?");
        if (!confirmDelete) return;
        try {
            const data = await fetch(`${api()}users/${id}`, {
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            })
            const result = await data.json();
            if (result.status === "success") {
                alert("User berhasil dihapus");
                fetchUser();
            } else {
                alert(result.message)
            }
        } catch (error) {
            console.log(error.message);
            alert("Terjadi kesalahan saat menghapus user");
        }

    }
    return (
        <div className="p-3 mt-1">
            <div className="bg-white shadow-lg p-2 rounded-2xl">
                <div className="mb-2 flex justify-end items-center">
                    <Button text={"Tambah user"} className={"px-3 py-1 bg-blue-500 text-white rounded-sm cursor-pointer"} onSmash={handelAdd} />
                    {modal && (
                        <Modal>
                            <UserForm onClose={() => { setModal(false) }} onSubmit={handelSubmit} data={data} setData={setData} editId={EditId} role={role} />
                        </Modal>
                    )}
                </div>
                <UserTable loading={loading} user={user} onEdit={handleEdit} onDelete={handleDelete} />
            </div>
        </div>
    )
}

export default User