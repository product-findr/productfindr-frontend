export function truncateAddress(address: string): string {
    if (!address.startsWith('0x') || address.length !== 42) {
      throw new Error('Invalid Ethereum address');
    }
  
    return `${address.substring(0, 4)}...${address.substring(address.length - 3)}`;
  }
  