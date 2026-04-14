export default function SerchProduct() {
    return (
        <div className="mb-6 flex justify-end ">
            <div className="relative group w-full md:w-72">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </span>

                <input
                    type="text"
                    placeholder="Cari sneakers favoritmu..."
                    className="w-full pl-10 pr-4 py-2 bg-white border-2 border-gray-100 outline-none 
                       focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 
                       rounded-xl shadow-sm transition-all duration-300 text-sm"
                />
            </div>
        </div>
    )
}