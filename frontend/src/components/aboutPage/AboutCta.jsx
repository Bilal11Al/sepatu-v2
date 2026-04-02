export default function AboutCta() {
    return (
        <div className="py-12 px-10">
            <div className="bg-linear-to-b to-blue-600 from-blue-400 p-10 grid grid-cols-1 md:grid-cols-2 rounded-lg">
                <div className="text-center md:text-left space-y-3">
                    <h3 className="text-white text-2xl md:text-3xl font-bold">Siap Memulai Langkahmu?</h3>
                    <p className="mt-2 text-white text-sm md:text-base">Kenyamanan dan keaslian yang kami ceritakan bukan sekadar kata-kata. Lihat koleksi pilihan kami sekarang.</p>
                </div>
                <div className="flex justify-center md:justify-end items-center mt-5">
                    <button className="bg-white px-10 py-3 rounded-sm text-sm md:text-lg font-bold hover:text-blue-400 cursor-pointer">Lihat Koleksi Eksklusif</button>
                </div>
            </div>
        </div>
    )
}