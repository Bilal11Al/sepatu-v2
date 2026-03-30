import hero from "../../assets/Product-presentation-rafiki.svg";
export default function HeroSection() {
    return (
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
    )
}