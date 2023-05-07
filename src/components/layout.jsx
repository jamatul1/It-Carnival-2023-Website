import React from "react";
import Header from "./header/header";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
}
