import React from "react";
import { graphql, PageProps } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/Layout";

type MDXData = { mdx: { body: string; frontmatter: { title: string } } };
const BlogPost = ({ data }: PageProps<MDXData>) => {
    return (
        <Layout>
            <h1>{data.mdx.frontmatter.title}</h1>
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
