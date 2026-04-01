export default function AboutSejarah() {
    return (
        <div className="bg-blue-50 p-5 py-15 px-5 grid grid-cols-1 md:grid-cols-2">
            <div className="p-5 py-15 relative flex md:justify-center items-center">
                <div className="bg-red-300 px-20 py-25 inline-block rounded-2xl z-10">
                </div>
                <div className="bg-green-400 px-15 py-20 inline-block absolute bottom-1 translate-x-25 rounded-2xl z-20">
                </div>
            </div>
            <div className="p-5 py-15">
                <div className="m-1 p-2">
                    <h3 className="text-sm mb-1">Lorem Ipsumis simply dummy text of the printing</h3>
                    <h1 className="text-4xl font-bold mb-5">Lorem Ipsumis simply dummy text of the</h1>
                    <p className="text-sm leading-tight">Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </div>
        </div>
    )
}