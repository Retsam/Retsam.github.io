import * as React from "react"
import "./global.css";
import "./index.css";

const IndexPage = () => {
  return (<>
    <header className="page-header">
      <title>Flotsam &amp; Retsam</title>
      <div className="wrapper">
        <a rel="author" href="/">Flotsam &amp; Retsam</a>
      </div>
    </header>
    <main className="page-content"><div className="wrapper">Hello <a href="#">Test</a></div></main>
    <footer><div className="wrapper"></div></footer>
  </>);
}

export default IndexPage
