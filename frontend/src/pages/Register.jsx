import RegisterForm from "../components/register/RegisterForm"
import { NavLink } from "react-router";

function Register() {
    return (
        <div className="px-2 bg-linear-to-tr from-blue-800 to-blue-400 w-full h-screen p-5 flex justify-center items-center">
            <div className="bg-gray-100 h-150 w-220  grid grid-cols-2 rounded-sm">
                <div className="p-2 w-96 h-full flex justify-center items-center ms-9">
                    <div className=" h-60 w-full ">
                        <h1 className="text-3xl mb-4 text-center font-bold text-green-800 underline">Register Akun</h1>
                        <RegisterForm />
                    </div>
                </div>
                <div className="bg-[url(https://img.freepik.com/premium-vector/geometric-gradient-technology-background_23-2149110132.jpg?semt=ais_hybrid&w=740&q=80)] bg-cover bg-repeat p-10 w-full h-full  rounded-sm">
                <h1 className="text-white">Logo</h1>
                    <div className="text-white flex flex-col justify-center items-center h-full p-5">
                        <div className="w-full">
                            <h1 className="text-3xl font-bold mb-2 text-strat">Selamat datang</h1>
                            <p className="text-justify text-sm mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus tenetur incidunt pariatur illum, neque qui facilis maxime ipsa earum velit commodi corporis, autem tempore numquam animi molestiae amet consectetur. Assumenda?</p>
                            <NavLink to={"/"} className={'w-full p-2 text-start text-sm hover:text-blue-400 hover:underline'}>Kembali ke Website</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register