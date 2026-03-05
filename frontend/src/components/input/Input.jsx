function Input({ htmlFor, labelText, id, name, type, placeholder, value, onChange, required, ref,image }) {
    return (
        <>
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
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
                onChange={onChange}
                required={required}
            />
        </>
    )
}

export default Input