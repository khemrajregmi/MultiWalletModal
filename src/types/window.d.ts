import { PublicKey } from '@solana/web3.js';

declare global {
  interface Window {
    phantom?: {
      solana?: {
        isPhantom?: boolean;
        connect(): Promise<{
          publicKey: {
            toString(): string;
          };
        }>;
        disconnect(): Promise<void>;
        request: (args: { method: string; params?: any[] }) => Promise<any>;
      }
    }
    ethereum?: {
      isMetaMask?: boolean;
      isTrust?: boolean;
      isCoinbaseWallet?: boolean;
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on?: (event: string, handler: (...args: any[]) => void) => void;
      removeListener?: (event: string, handler: (...args: any[]) => void) => void;
      selectedAddress?: string;
    }
  }
} 