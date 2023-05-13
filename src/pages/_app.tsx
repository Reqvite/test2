import { FC } from "react";
import { Layout } from "@/components";
import "../app/styles/globals.css";
import { StateContext } from "@/context/StateContext";
import { Toaster } from "react-hot-toast";
import { AppProps } from "next/app";
import PrivacyPopup from "@/components/ui/PrivacyPopup";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
        <PrivacyPopup />
      </Layout>
    </StateContext>
  );
};

export default App;
