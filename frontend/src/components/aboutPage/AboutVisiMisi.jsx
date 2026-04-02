export default function AboutVisiMisi() {
    return (
        <div className="px-10 py-5 grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="bg-blue-500 p-1">
                <h1 className="text-center font-bold text-2xl text-white">Visi</h1>
                <div className="bg-gray-100  px-15 py-5 ">
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, blanditiis. Molestias facere obcaecati accusamus labore odit dicta optio minus repellendus accusantium molestiae aut dolores, dolore quam unde officia mollitia atque.</h3>
                </div>
            </div>
            <div className="bg-blue-500 p-1">
                <h1 className="text-center font-bold text-2xl text-white">Misi</h1>
                <div className="bg-gray-100  px-15 py-5 ">
                    <ul className="list-inside list-disc">
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, non?</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, non?</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, non?</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}