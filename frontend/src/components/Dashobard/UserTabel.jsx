import Tabel from "../tabel/Tabel";
import TabelHead from "../tabel/TabelHead";
import TabelBody from "../tabel/TabelBody";
import Loading from "../loading/Loading";
import Button from "../button/Button";
import FormatDate from "../../utils/FormatDate";

export default function UserTable({ loading, user, onEdit, onDelete }) {
    return (
        <Tabel>
            <thead className="bg-gray-100">
                <tr>
                    <TabelHead text={"No"} />
                    <TabelHead text={"Username"} />
                    <TabelHead text={"Email"} />
                    <TabelHead text={"Role"} />
                    <TabelHead text={"Create at"} />
                    <TabelHead text={"Aksi"} />
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {loading ? (
                    <Loading loading={loading} />
                ) : (
                    user.map((u, i) => (
                        <tr key={u.id} className="hover:bg-gray-50 transition-colors duration-150">
                            <TabelBody text={i + 1} />
                            <TabelBody text={u.username} />
                            <TabelBody text={u.email} />
                            <TabelBody text={u.role} />
                            <TabelBody text={FormatDate(u.created_at)} />
                            <td className="px-4 py-3 text-sm">
                                <div className="flex gap-1">
                                    <Button text="Edit" className="px-3 py-1 bg-blue-500 text-white rounded-sm cursor-pointer" onSmash={() => onEdit(u)} />
                                    <Button text="Delete" className="px-3 py-1 bg-red-500 text-white rounded-sm cursor-pointer" onSmash={() => onDelete(u.id)} />
                                </div>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </Tabel>
    )
}