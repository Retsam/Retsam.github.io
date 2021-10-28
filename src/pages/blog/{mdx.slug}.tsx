import React from "react";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/Layout";
import "./blogpost.css";

type MDXData = {
    mdx: { body: string; frontmatter: { title: string; subtitle: string } };
};
const BlogPost = ({ data }: PageProps<MDXData>) => {
    const title = data.mdx.frontmatter.title;
    return (
        <Layout pageTitle={title}>
            <h1 className="post-title">{title}</h1>
            <h2 className="post-subtitle">{data.mdx.frontmatter.subtitle}</h2>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Layout>
    );
};

export default BlogPost;

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            body
            frontmatter {
                title
                subtitle
            }
        }
    }
`;
