import HeroContact from "../../components/contactPage/HeroContact";

export default function Contact() {
    return (
        <div>
            <HeroContact />
            <div className="max-w-5xl mx-auto my-10 shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="bg-gray-300 p-2 px-5 py-10">
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
                                <span>Lorem Ipsum is simply dummy </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 px-5 mt-5">
                            <div className="bg-amber-900 rounded-full p-1">
                                <h1>logo</h1>
                            </div>
                            <div className="bg-amber-300">
                                <p>Get in touch</p>
                                <span>Lorem Ipsum is simply dummy </span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-amber-500 p-1">

                    </div>
                </div>
            </div>
        </div>
    )
} 