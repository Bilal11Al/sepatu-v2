import Button from "../button/Button";
import Tabel from "../tabel/Tabel";
import TabelBody from "../tabel/TabelBody";
import TabelHead from "../tabel/TabelHead";

export default function ProductTabel() {
    return (
        <Tabel>
            <thead>
                <tr>
                    <TabelHead text={'No'} />
                    <TabelHead text={'Name'} />
                    <TabelHead text={'Kategori'} />
                    <TabelHead text={'Desctrption'} />
                    <TabelHead text={'Image'} />
                    <TabelHead text={'Price'} />
                    <TabelHead text={'Aksi'} />
                </tr>
            </thead>
            <tbody>
                <tr className=" hover:bg-gray-100">
                    <TabelBody text={"1"} />
                    <TabelBody text={"Sepatu Jordan"} />
                    <TabelBody text={"1"} />
                    <TabelBody text={"1"} />
                    <TabelBody text={"1"} />
                    <TabelBody text={"1"} />
                    <td>
                        <div className="flex p-1 gap-1.5">
                            <Button text={'Update'} className={'bg-blue-400 p-1 rounded-sm text-white  cursor-pointer'} />
                            <Button text={'Delete'} className={'bg-red-600 p-1 text-white rounded-sm  cursor-pointer'} />
                        </div>
                    </td>
                </tr>
            </tbody>
        </Tabel>
    )
}