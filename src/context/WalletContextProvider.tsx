'use client';

import { FC, ReactNode, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

// Import wallet adapter CSS
require('@solana/wallet-adapter-react-ui/styles.css');

interface Props {
    children: ReactNode;
}

export const WalletContextProvider: FC<Props> = ({ children }) => {
    // You can also provide a custom RPC endpoint
    const endpoint = useMemo(() => clusterApiUrl('devnet'), []);

    // Initialize all the wallets you want to use
    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter({
                network: 'devnet'
            })
        ],
        []
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider
                wallets={wallets}
                autoConnect={false} // Changed to false to prevent auto-connection
                onError={(error) => {
                    console.error('Wallet error:', error);
                }}
            >
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}; 