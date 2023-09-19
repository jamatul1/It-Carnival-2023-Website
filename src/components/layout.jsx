import React from "react";
import Header from "./header/header";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import Footer from "./footer/footer";

export default function Layout({ formLink, children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header formLink={formLink} />
        <main
          style={{
            background:
              "-webkit-linear-gradient(to right, #ff00cc, #333399)" /* Chrome 10-25, Safari 5.1-6 */,
            background: "linear-gradient(to right, #ff00cc, #333399)",
          }}
        >
          {children}
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
