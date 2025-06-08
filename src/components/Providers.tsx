'use client';

import { SessionProvider } from 'next-auth/react';
import { WalletContextProvider } from '@/context/WalletContextProvider';

export default function Providers({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <SessionProvider>
            <WalletContextProvider>{children}</WalletContextProvider>
        </SessionProvider>
    );
} 