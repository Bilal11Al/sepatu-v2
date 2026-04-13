import FillterProducts from "../../components/productPage/FillterProducts";
export default function Product() {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-5 py-10 flex flex-col md:flex-row gap-8 items-start">
                <FillterProducts />
                <div className="flex-1 w-full bg-gray-50 rounded-3xl p-10 border-2 border-dashed border-gray-200 min-h-[600px] flex flex-col items-center justify-center text-center">
                    <div className="bg-white p-6 rounded-full shadow-sm mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">📦</div>
                    </div>
                    <p className="text-gray-400 font-bold text-xl uppercase tracking-widest">Daftar Produk Kamu</p>
                    <p className="text-gray-400 text-sm italic">Area ini akan menampilkan koleksi sneakers terbaikmu.</p>
                </div>

            </div>
        </div>
    )
}