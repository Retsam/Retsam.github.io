import React from "react";
import { Helmet } from "react-helmet";
import "./Layout.css";

export type LayoutProps = {
    children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => (
    <>
        <header className="page-header">
            <Helmet
                htmlAttributes={{
                    lang: "en",
                }}
            />
            <title>Flotsam &amp; Retsam</title>
            <div className="wrapper">
                <a rel="author" href="/">
                    Flotsam &amp; Retsam
                </a>
            </div>
        </header>
        <main className="page-content">
            <div className="wrapper">{children}</div>
        </main>
        <footer>
            <div className="wrapper"></div>
        </footer>
    </>
);

export default Layout;
