import Head from "next/head";
import { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Store</title>
      </Head>
      <header className="header">
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
