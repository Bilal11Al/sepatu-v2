export default function Tabel({ children }) {
    return (
        <table className="border border-gray-200 min-w-full rounded-sm overflow-hidden mt-1">
            {children}
        </table>
    )
}