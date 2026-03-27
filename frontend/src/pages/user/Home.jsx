import hero from "../../assets/Product-presentation-rafiki.svg";

function Home() {
    return (
        <div>
            <div className="bg-blue-600 min-h-100 flex items-center">
                <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="max-w-2xl text-white">
                        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-white to-blue-200">
                            Langkah Pasti, Gaya Tak Terhenti
                        </h1>
                        <p className="text-lg opacity-90 mb-8 leading-relaxed">
                            Temukan koleksi sepatu premium yang menggabungkan kenyamanan
                            maksimal dengan desain modern untuk setiap aktivitasmu.
                        </p>
                        <button className="bg-white text-blue-600 hover:bg-gray-100 transition-colors px-8 py-3 rounded-md font-bold text-lg shadow-lg">
                            Belanja Sekarang
                        </button>
                    </div>
                    <div className="w-full max-w-md lg:max-w-lg">
                        <img
                            src={hero}
                            alt="Hero Presentation"
                            className="w-full h-auto object-contain drop-shadow-xl"
                        />
                    </div>

                </div>
            </div>
            <div className="p-6 flex justify-center items-center">
                <div className="bg-linear-to-b from-blue-600 to-blue-400 w-full max-w-4xl p-8 md:p-12 rounded-3xl text-white shadow-2xl">
                    <h1 className="font-bold text-3xl md:text-4xl mb-4">
                        Tentang Kami
                    </h1>
                    <div className="mt-2">
                        <p className="text-sm md:text-base leading-relaxed opacity-90 text-justify">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus voluptas sit minima,
                            ex placeat eius? Dolores, assumenda ducimus facilis laboriosam velit nobis minima
                            laborum porro architecto reiciendis magnam a nostrum possimus dicta delectus doloribus
                            optio maxime dolore, corporis quia, quis obcaecati ad et? Quod, aut error et hic esse
                            natus saepe distinctio molestiae quam nesciunt, voluptas tenetur commodi earum corporis
                            quaerat, quo quibusdam repudiandae.
                        </p>
                    </div>
                    <button className="bg-white text-blue-600 hover:bg-gray-100 transition-all font-bold mt-8 px-8 py-3 rounded-xl shadow-md active:scale-95">
                        Lihat Selengkapnya
                    </button>
                </div>
            </div>
            <div className="py-12 bg-gray-50">
                <div className="text-center mb-10">
                    <h1 className="font-black text-2xl md:text-3xl text-blue-600 uppercase tracking-tight">
                        Keunggulan Kami
                    </h1>
                    <div className="h-1.5 w-16 bg-blue-500 mx-auto mt-3 rounded-full"></div>
                </div>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition hover:shadow-md">
                            <h3 className="font-bold text-gray-800 leading-tight">Original Terjamin</h3>
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mt-4 mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>
                            </div>
                            <p className="text-sm font-normal">Kami hanya menjual produk asli
                                dari distributor resmi.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition hover:shadow-md">
                            <h3 className="font-bold text-gray-800 leading-tight">Proses Cepat</h3>
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mt-4 mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>
                            </div>
                            <p className="text-sm font-normal">Kami hanya menjual produk asli
                                dari distributor resmi.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition hover:shadow-md">
                            <h3 className="font-bold text-gray-800 leading-tight">Gratis Ongkir</h3>
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mt-4 mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>
                            </div>
                            <p className="text-sm font-normal">Kami hanya menjual produk asli
                                dari distributor resmi.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition hover:shadow-md">
                            <h3 className="font-bold text-gray-800 leading-tight">Layanan 24/7</h3>
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mt-4 mb-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"></svg>
                            </div>
                            <p className="text-sm font-normal">Kami hanya menjual produk asli
                                dari distributor resmi.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;