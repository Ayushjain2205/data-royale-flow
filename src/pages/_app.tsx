import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/UI/Layout";
import { Toaster } from "react-hot-toast";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { FilecoinCalibrationTestnet, Filecoin } from "@thirdweb-dev/chains";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={{
        ...FilecoinCalibrationTestnet,
        rpc: ["https://filecoin-calibration.chainstacklabs.com/rpc/v1"],
      }}
      supportedChains={[FilecoinCalibrationTestnet, Filecoin]}
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
    >
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </ThirdwebProvider>
  );
}
