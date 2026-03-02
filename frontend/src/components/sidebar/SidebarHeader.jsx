import { ChevronDownIcon } from "@heroicons/react/24/outline"

export default function SiderBarHeader({ onSmahs, open, text, icon }) {
    return (
        <div
            onClick={onSmahs}
            className="
    flex items-center gap-2
    p-2 cursor-pointer
    text-white
    rounded-sm
    hover:bg-blue-400
  "
        >
            {icon}

            <span className="flex-1 px-2">
                {text}
            </span>

            <ChevronDownIcon
                className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''
                    }`}
            />
        </div>

    )
}