
export default function Modal({ children }) {
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md rounded-lg shadow-2xl p-6 relative animate-fadeIn">
                {children}
            </div>
        </div>

    )
}