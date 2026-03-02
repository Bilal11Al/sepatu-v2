function Button({ text, type, className, onSmash, disabled }) {
    return (
        <button
            onClick={onSmash}
            type={type}
            className={className}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default Button