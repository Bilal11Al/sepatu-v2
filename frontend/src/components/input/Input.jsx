function Input({ htmlFor, labelText, id, name, type, placeholder, value, onChange, required, ref, image }) {
    return (
        // div pembungkus dengan flex-col memaksa label di atas input
        // w-full memastikan komponen ini mengambil lebar penuh dari container
        <div className="flex flex-col w-full">
            <label
                htmlFor={htmlFor}
                className="text-sm font-medium text-gray-600 mb-1"
            >
                {labelText}
            </label>

            <input
                id={id}
                ref={ref}
                name={name}
                type={type}
                accept={image}
                placeholder={placeholder}
                value={value}
                // w-full di sini memastikan input memenuhi lebar kotak
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                onChange={onChange}
                required={required}
            />
        </div>
    )
}

export default Input