import React from "react";
import Layout from "../components/Layout";
import { graphql, PageProps } from "gatsby";
import "./global.css";

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
        <li key={post.id}>
            <h2>
                <a href={`/blog/${post.slug}`}>{post.frontmatter.title}</a>
            </h2>
        </li>
    ));
    return (
        <Layout pageTitle="Flotsam &amp; Retsam">
            <h1>Posts</h1>
            <ul>{posts}</ul>
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
