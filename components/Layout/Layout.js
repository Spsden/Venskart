import React from "react";
import { useRouter } from "next/router";
import NavBar from "../NavigationBar/NavBar";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
    <NavBar />
      {/* {router.pathname != "/" ? <NavBar /> : null} */}
      {children}
    </>
  );
};

export default Layout;
