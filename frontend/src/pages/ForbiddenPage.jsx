import { useNavigate } from "react-router";

export default function ForbiddenPage() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold text-red-600">403</h1>
            <p className="text-xl mt-4">Akses Ditolak!</p>
            <p className="text-gray-500 mb-6">Kamu tidak memiliki izin untuk mengakses halaman ini.</p>
            <button
                onClick={() => navigate("/")}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Kembali ke Beranda
            </button>
        </div>
    );
}