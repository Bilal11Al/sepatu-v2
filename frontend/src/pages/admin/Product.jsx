import { Activity, useState } from "react";
import Button from "../../components/button/Button";
import ProductTabel from "../../components/Dashobard/ProductTabel";
import Modal from "../../components/modal/Modal";
import ProductFrom from "../../components/Dashobard/ProductForm";

export default function Product() {
    const [modal, setModal] = useState(false);



    function handelForm() {
        setModal(true)
    }
    return (
        <div className="p-1 m-1">
            <div className="bg-white shadow-lg p-2 rounded-2xl">
                <div className="flex justify-end items-center">
                    <Button text={'Tambah Product'} className={'bg-blue-500 p-2 px-2 py-1 rounded-sm text-sm text-white cursor-pointer'} onSmash={handelForm} />
                </div>
                <ProductTabel />
                <Activity mode={modal ? "visible" : 'hidden'}>
                    <Modal>
                        <ProductFrom onClose={() => setModal(false)} />
                    </Modal>
                </Activity>
            </div>
        </div>
    )
}