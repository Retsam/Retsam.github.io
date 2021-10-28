import React from "react";

export type AsideProps = { children: React.ReactNode };
const Aside = ({ children }: AsideProps) => (
    <div style={{ marginLeft: "30px" }}>{children}</div>
);

export default Aside;
