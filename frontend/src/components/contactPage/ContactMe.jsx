export default function ContactMe () {
    return(
         <div className="max-w-5xl mx-auto my-10 shadow-2xl ">
                <div className="grid grid-cols-1 md:grid-cols-2  ">
                    <div className="bg-gray-300 p-2 px-5 py-10 ">
                        <h3 className="text-black text-3xl font-extrabold">Get in touch</h3>
                        <p className="text-black text-sm mt-5 f">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="flex items-center gap-1 px-5 mt-5">
                            <div className="bg-amber-900 rounded-full p-1">
                                <h1>logo</h1>
                            </div>
                            <div className="bg-amber-300">
                                <p>Get in touch</p>
                                <span>Lorem Ipsumis simply dummy </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 px-5 mt-5">
                            <div className="bg-amber-900 rounded-full p-1">
                                <h1>logo</h1>
                            </div>
                            <div className="bg-amber-300">
                                <p>Get in touch</p>
                                <span>Lorem Ipsumis simply dummy </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 px-5 mt-5">
                            <div className="bg-amber-900 rounded-full p-1">
                                <h1>logo</h1>
                            </div>
                            <div className="bg-amber-300">
                                <p>Get in touch</p>
                                <span>Lorem Ipsumis simply dummy </span>
                            </div>
                        </div>
                        <div className="mt-5">
                            <p className="px-5 text-lg font-semibold">Follow me</p>
                            <div className="flex items-center px-5 mt-2 gap-1">
                                <div className="bg-black p-1 rounded-full"><p>logo</p></div>
                                <div className="bg-black p-1 rounded-full"><p>logo</p></div>
                                <div className="bg-black p-1 rounded-full"><p>logo</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="p-1 shadow-2xl ">
                        <p className="px-5 py-5 font-semibold text-lg">Send us message</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                            <div className="px-5 flex flex-col">
                                <label htmlFor="" className="text-sm font-semibold">Name</label>
                                <input type="text" className="outline-none bg-white px-5 border-2 border-gray-300  p-1 focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 
                       rounded-xl shadow-sm transition-all duration-300 text-sm" />
                            </div>
                            <div className="px-5  flex flex-col">
                                <label htmlFor="" className="text-sm font-semibold ">Name</label>
                                <input type="text" className="outline-none bg-white px-5 border-2 border-gray-300  p-1 focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 
                       rounded-xl shadow-sm transition-all duration-300 text-sm" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-5">
                            <div className="px-5 flex flex-col">
                                <label htmlFor="" className="text-sm font-semibold">Name</label>
                                <input type="text" className="outline-none bg-white px-5 border-2 border-gray-300  p-1 focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 
                       rounded-xl shadow-sm transition-all duration-300 text-sm" />
                            </div>
                            <div className="px-5  flex flex-col">
                                <label htmlFor="" className="text-sm font-semibold ">Name</label>
                                <input type="text" className="outline-none bg-white px-5 border-2 border-gray-300  p-1 focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 
                       rounded-xl shadow-sm transition-all duration-300 text-sm" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1  p-1 mt-5 px-5">
                            <label htmlFor="" className="text-sm font-semibold">Deskrpsi</label>
                            <textarea name="" id="" className="outline-none bg-white  border-2 border-gray-300  p-1 focus:border-blue-500 focus:ring-4 focus:ring-blue-50/50 
                       rounded-xl shadow-sm transition-all duration-300 text-sm"></textarea>
                        </div>
                        <div className="flex justify-center items-center mt-2 px-5 mb-5">
                            <button className="bg-blue-500 rounded-sm cursor-pointer p-1 w-screen text-white font-bold hover:bg-blue-400">Kirim</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}