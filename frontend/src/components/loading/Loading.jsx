export default function Loading({ loading }) {
    if (!loading) return null;
    return (
        <>
            {loading && (
                <tr>
                    <td colSpan={5} className="text-center py-6">Loading...</td>
                </tr>
            )}
        </>
    )
}