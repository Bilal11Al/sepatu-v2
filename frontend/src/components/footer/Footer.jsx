import { QrCodeIcon,MapIcon,EnvelopeIcon,ClockIcon } from "@heroicons/react/24/outline"
import { NavLink } from "react-router"
export default function Footer() {
    return (
        <footer className="bg-blue-500 py-10 px-5">
            <div className="grid md:grid-cols-3">
                <div className="p-5 py-5 px-6">
                    <h2 className="text-white font-bold text-2xl py-5 ">Logo</h2>
                    <p className="text-white ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam iste quo cumque unde commodi nisi ea minus. Voluptate rem odit cum </p>
                    <div className="flex justify-start items-center mt-2">
                        <QrCodeIcon className="h-6 text-white" />
                        <QrCodeIcon className="h-6 text-white" />
                        <QrCodeIcon className="h-6 text-white" />
                    </div>
                </div>
                <div className="p-5 py-5 px-6">
                    <h2 className="text-white font-bold text-2xl py-5">Site map</h2>
                    <div className="flex flex-col space-y-3">
                        <NavLink to={"/"} className={'text-white'}>Home</NavLink >
                        <NavLink to={"/"} className={'text-white'}>About</NavLink >
                        <NavLink to={"/"} className={'text-white'}>Product</NavLink >
                        <NavLink to={"/"} className={'text-white'}>Contact</NavLink >
                    </div>
                </div>
                <div className="p-5 py-5 px-6 space-y-2">
                    <h2 className="text-white font-bold text-2xl py-5">Kontak & Lokasi</h2>
                    <div className="text-white flex justify-start items-center gap-1 mb-1">
                        <MapIcon className="h-5"/> 
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="text-white flex justify-start items-center gap-1 mb-1">
                        <EnvelopeIcon className="h-5"/> 
                        <p>@Lorem.gmail.com</p>
                    </div>
                    <div className="text-white flex justify-start items-center gap-1">
                        <ClockIcon className="h-5"/> 
                        <p>08:00 - 22:00</p>
                    </div>
                </div>
            </div>
            <div className="text-center border-t-2 border-t-blue-400  mt-5 p-1">
                <p className="text-white text-sm">&copy; 2026 Bilal al tintop. Built with React & Tailwind.</p>
            </div>
        </footer>
    )
}