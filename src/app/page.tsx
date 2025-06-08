'use client';

import { useState } from 'react';
import WalletModal from '@/components/WalletModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* Header */}
      <header className="w-full flex items-center justify-between py-6 px-8 bg-blue-100 rounded-lg shadow mb-8">
        <h1 className="text-3xl font-bold text-blue-400">PlayMate Web3 Wallet Connection</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Connect Wallet
        </button>
      </header>

      {/* Body */}
      <main className="flex flex-col items-center gap-8 flex-1 w-full">
        {/* Add your main content here */}
        <p className="text-lg font-semibold text-blue-700 animate-fade-in">
          Welcome to the multiwallet dApp. Connect your wallet to get started.
        </p>
        <style jsx global>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 1s ease;
          }
        `}</style>
      </main>

      {/* Footer */}
      <footer className="w-full mt-8 py-4 px-8 bg-blue-100 rounded-lg shadow text-center text-blue-400">
        &copy; {new Date().getFullYear()} Multiwallet. All rights reserved.
      </footer>

      <WalletModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
