import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'


const BlogPost = ({data}) => {
  return (
    <MDXRenderer>{data.mdx.body}</MDXRenderer>
  )
}

export default BlogPost;

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      body
    }
  }
`
