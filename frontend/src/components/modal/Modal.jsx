export default function Modal({ children }) {
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative 
                            animate-in fade-in zoom-in duration-300 
                            max-h-[90vh] overflow-y-auto">
                {children}
            </div>
        </div>
    )
}