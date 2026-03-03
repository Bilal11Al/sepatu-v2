import Button from "../button/Button";
import Loading from "../loading/Loading";
import Tabel from "../tabel/Tabel";
import TabelBody from "../tabel/TabelBody";
import TabelHead from "../tabel/TabelHead";

export default function ProductTabel({ loading, data, onEdit, onDelte }) {
    const BASE_URL = `http://localhost:4000/upload/`;
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
                {loading ? (<Loading loading={loading} />) : (
                    data.map((p, i) => (
                        <tr key={p.id} className=" hover:bg-gray-100">
                            <TabelBody text={i + 1} />
                            <TabelBody text={p.name} />
                            <TabelBody text={p.category} />
                            <TabelBody text={p.description} />
                            <TabelBody text={
                                <img src={BASE_URL + p.image} width="80px" />
                            } />
                            <TabelBody text={"Rp." + p.price.toLocaleString()} />
                            <td>
                                <div className="flex p-1 gap-1.5">
                                    <Button text={'Update'} className={'bg-blue-400 p-1 rounded-sm text-white  cursor-pointer'} onSmash={() => (onEdit(p))} />
                                    <Button text={'Delete'} className={'bg-red-600 p-1 text-white rounded-sm  cursor-pointer'} onSmash={() => onDelte(p.id)} />
                                </div>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </Tabel>
    )
}