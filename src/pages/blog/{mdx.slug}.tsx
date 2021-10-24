import { graphql, PageProps } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

type MDXData = { mdx: {body: string }};
const BlogPost = ({data}: PageProps<MDXData>) => {
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
