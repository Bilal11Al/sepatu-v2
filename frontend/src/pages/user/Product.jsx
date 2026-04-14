import ContentProduct from "../../components/productPage/ContentProduct";
import FillterProducts from "../../components/productPage/FillterProducts";
import SerchProduct from "../../components/productPage/SerchProduct";
export default function Product() {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-5 py-10 flex flex-col md:flex-row gap-8 items-start">
                <FillterProducts />
                <div className="w-full  bg-gray-50 rounded-3xl p-10 border-2 border-dashed border-gray-200 h-125 overflow-y-auto">
                    <SerchProduct />
                    <ContentProduct />
                </div>
            </div>
        </div>
    )
}