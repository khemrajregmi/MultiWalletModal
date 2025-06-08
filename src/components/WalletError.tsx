export default function WalletError({ error, onDismiss }: { error: string; onDismiss: () => void }) {
    return (
        <div className="p-4 mb-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex justify-between items-start">
                <div className="flex-1">
                    <p className="text-sm text-red-600">{error}</p>
                </div>
                <button
                    onClick={onDismiss}
                    className="ml-4 text-gray-400 hover:text-gray-500"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}; 