import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Data Royale</title>
      </Head>
      <Navbar />
      <div className="mx-[48px] my-[32px]">{children}</div>
    </div>
  );
};

export default Layout;
