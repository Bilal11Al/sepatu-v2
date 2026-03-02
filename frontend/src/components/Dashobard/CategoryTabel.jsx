import FormatDate from "../../utils/FormatDate";
import Button from "../button/Button";
import Loading from "../loading/Loading";
import Tabel from "../tabel/Tabel";
import TabelBody from "../tabel/TabelBody";
import TabelHead from "../tabel/TabelHead";

export default function CategoryTable({ data, onEdit, onDelete, loading }) {
    return (
        <Tabel>
            <thead>
                <tr>
                    <TabelHead text={'No'} />
                    <TabelHead text={'Category Name'} />
                    <TabelHead text={'Created'} />
                    <TabelHead text={'Aksi'} />
                </tr>
            </thead>
            <tbody>
                {loading ? (<Loading loading={loading} />) : (
                    data.map((c, i) => (
                        <tr key={c.id}>
                            <TabelBody text={i + 1} />
                            <TabelBody text={c.category} />
                            <TabelBody text={FormatDate(c.created_at)} />
                            <td>
                                <div className="flex">
                                    <Button text={'Update'} className={'bg-blue-400 p-1 me-3 rounded-sm text-white  cursor-pointer'} onSmash={() => onEdit(c)} />
                                    <Button text={'Delete'} className={'bg-red-600 p-1 text-white rounded-sm  cursor-pointer'} onSmash={() => onDelete(c.id)} />
                                </div>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </Tabel>
    )
}