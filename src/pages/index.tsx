import React from "react";
import Layout from "../components/Layout";
import { graphql, PageProps } from "gatsby";
import "./global.css";
import "./index.css";

type MDXData = {
    allMdx: {
        nodes: Array<{
            id: string;
            slug: string;
            frontmatter: { title: string; date: string };
        }>;
    };
};
const IndexPage = ({ data }: PageProps<MDXData>) => {
    const posts = data.allMdx.nodes.map((post) => (
        <article key={post.id}>
            <h2 className="article-list-title">
                <a href={`/blog/${post.slug}`}>{post.frontmatter.title}</a>
            </h2>
            <div className="article-list-datestamp">
                {new Date(post.frontmatter.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </div>
        </article>
    ));
    return (
        <Layout pageTitle="Flotsam &amp; Retsam">
            <h1>Posts</h1>
            <main>{posts}</main>
        </Layout>
    );
};

export default IndexPage;

export const query = graphql`
    {
        allMdx(sort: { fields: frontmatter___date, order: DESC }) {
            nodes {
                id
                slug
                frontmatter {
                    title
                    date
                }
            }
        }
    }
`;
