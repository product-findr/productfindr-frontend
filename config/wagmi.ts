import { http, createConfig } from "wagmi";
import { base, baseSepolia } from "wagmi/chains";
import { coinbaseWallet } from "wagmi/connectors";

export const wagmiConfig = createConfig({
    chains: [baseSepolia],
    multiInjectedProviderDiscovery: false,
    connectors: [
        coinbaseWallet({
            appName: 'Productfindr',
            preference: 'all'
        }),
    ],
    ssr: true,
    transports: {
        [baseSepolia.id]: http(),
    },
});


declare module 'wagmi' {
    interface Register {
        config: typeof wagmiConfig;
    }
}