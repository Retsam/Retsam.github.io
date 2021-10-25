import React from "react";
import { Helmet } from "react-helmet";
import "./Layout.css";

export type LayoutProps = {
    children: React.ReactNode;
    pageTitle: string;
};
const Layout = ({ children, pageTitle }: LayoutProps) => (
    <>
        <header className="page-header">
            <Helmet
                htmlAttributes={{
                    lang: "en",
                }}
            />
            <title>{pageTitle}</title>
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
