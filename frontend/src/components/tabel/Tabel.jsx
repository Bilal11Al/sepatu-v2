export default function Tabel({ children }) {
    return (
        <div className="w-full overflow-x-auto border border-gray-200 rounded-sm mt-1 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
                {children}
            </table>
        </div>
    )
}