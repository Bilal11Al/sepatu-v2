import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
export default function FillterProducts() {
    const [open, setOpen] = useState(false);
    return (
        <div className="w-full md:w-72 bg-white border border-gray-100 shadow-sm rounded-3xl p-6  top-5">
            <h3 className="font-black text-2xl mb-6 text-gray-800 tracking-tight">Katalog</h3>
            <div className="mb-8">
                <p className="font-bold text-xs uppercase tracking-widest text-blue-600 mb-4">Kategori</p>
                <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-gray-600 group-hover:text-blue-600 transition-colors font-medium">Sneakers Casual</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-gray-600 group-hover:text-blue-600 transition-colors font-medium">Running Shoes</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-gray-600 group-hover:text-blue-600 transition-colors font-medium">Limited Edition</span>
                    </label>
                </div>
            </div>
            <div className="pt-6 border-t border-gray-100">
                <p className="font-bold text-lg uppercase tracking-widest text-blue-600">Filter by:</p>
                <div
                    className="flex justify-between items-center cursor-pointer group select-none"
                    onClick={() => setOpen(prev => prev === "size" ? null : 'size')}
                >
                    <p className="font-bold text-xs uppercase tracking-widest text-blue-600"> Size</p>
                    <ChevronDownIcon className={`h-4 text-gray-400 transition-transform duration-300 ${open === "size" ? "rotate-180 text-blue-600" : ''}`} />
                </div>
                {open === "size" && (
                    <div className="mt-4 grid grid-cols-2 gap-2">
                        <label className="flex items-center justify-center border border-gray-200 rounded-xl py-2 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all group">
                            <input type="checkbox" className="hidden" />
                            <span className="text-sm font-bold text-gray-600 group-hover:text-blue-600">39</span>
                        </label>
                        <label className="flex items-center justify-center border border-gray-200 rounded-xl py-2 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all group">
                            <input type="checkbox" className="hidden" />
                            <span className="text-sm font-bold text-gray-600 group-hover:text-blue-600">40</span>
                        </label>
                        <label className="flex items-center justify-center border border-gray-200 rounded-xl py-2 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all group">
                            <input type="checkbox" className="hidden" />
                            <span className="text-sm font-bold text-gray-600 group-hover:text-blue-600">41</span>
                        </label>

                        <label className="flex items-center justify-center border border-gray-200 rounded-xl py-2 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all group">
                            <input type="checkbox" className="hidden" />
                            <span className="text-sm font-bold text-gray-600 group-hover:text-blue-600">42</span>
                        </label>
                    </div>
                )}

                <div
                    className="flex justify-between items-center cursor-pointer group select-none mt-2"
                    onClick={() => setOpen(prev => prev === "price" ? null : 'price')}
                >
                    <p className="font-bold text-xs uppercase tracking-widest text-blue-600">Price</p>
                    <ChevronDownIcon className={`h-4 text-gray-400 transition-transform duration-300 ${open === "price" ? "rotate-180 text-blue-600" : ''}`} />
                </div>
                {open === "price" && (
                    <>
                        <div className="p-5">
                            <label className="flex justify-between items-center gap-2 mb-2">
                                <input type="checkbox" className="w-4 h-4 accent-blue-600 cursor-pointer" />
                                <span className="text-sm font-bold">Rp.150.000 - Rp.250.000</span>
                            </label>
                            <label className="flex justify-between items-center gap-2 mb-2">
                                <input type="checkbox" className="w-4 h-4 accent-blue-600 cursor-pointer" />
                                <span className="text-sm font-bold">Rp.150.000 - Rp.250.000</span>
                            </label>
                            <label className="flex justify-between items-center gap-2 mb-2">
                                <input type="checkbox" className="w-4 h-4 accent-blue-600 cursor-pointer" />
                                <span className="text-sm font-bold">Rp.150.000 - Rp.250.000</span>
                            </label>
                            <label className="flex justify-between items-center gap-2 mb-2">
                                <input type="checkbox" className="w-4 h-4 accent-blue-600 cursor-pointer" />
                                <span className="text-sm font-bold">Rp.150.000 - Rp.250.000</span>
                            </label>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}