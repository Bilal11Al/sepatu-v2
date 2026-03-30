export default function HomeTentangKami() {
    return (
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
    )
}