import { createPublicClient, http } from 'viem'
import { baseSepolia } from "wagmi/chains";


export const publicClient = createPublicClient({
    chain: baseSepolia,
    transport: http()
});
