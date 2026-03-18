import RegisterForm from "../components/register/RegisterForm";
import { NavLink } from "react-router";

function Register() {
    return (
        <div className="min-h-screen w-full bg-linear-to-tr from-blue-800 to-blue-400 flex justify-center items-center p-4 md:p-10">
            <div className="bg-white w-full max-w-5xl flex flex-col-reverse md:flex-row rounded-xl shadow-2xl overflow-hidden">

                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">
                    <NavLink to="/" className="md:hidden text-blue-600 text-sm font-medium mb-6 flex items-center gap-2">
                        ← Kembali ke Website
                    </NavLink>

                    <div className="w-full max-w-md mx-auto">
                        <h1 className="text-3xl mb-2 font-bold text-gray-800">
                            Daftar Akun
                        </h1>
                        <p className="text-gray-500 text-sm mb-8 italic">
                            Bergabunglah dengan kami dan nikmati kemudahan berbelanja.
                        </p>
                        <RegisterForm />
                    </div>
                </div>
                <div className="hidden md:flex md:w-1/2 p-12 bg-[url('https://img.freepik.com/premium-vector/geometric-gradient-technology-background_23-2149110132.jpg?semt=ais_hybrid&w=740&q=80')] bg-cover bg-center flex-col justify-between text-white">
                    <h1 className="text-2xl font-bold tracking-tighter">Logo</h1>

                    <div className="bg-black/20 p-6 rounded-lg backdrop-blur-sm">
                        <h2 className="text-3xl font-bold mb-4">Selamat datang</h2>
                        <p className="text-justify text-sm leading-relaxed opacity-95 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus tenetur incidunt pariatur illum, neque qui facilis maxime ipsa earum velit commodi corporis.
                        </p>
                        <NavLink to="/" className="inline-block text-sm font-semibold border-b-2 border-white hover:text-blue-200 hover:border-blue-200 transition-all">
                            Kembali ke Website
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Register;