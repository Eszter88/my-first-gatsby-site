import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  console.log(image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      < GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt}/>
      <p>
        Credit: {" "}
        <a href= {data.mdx.frontmatter.hero_image_credit_link} target="_blank" > 
        {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(aspectRatio: 1.78, transformOptions: {cropFocus: ATTENTION})
          }
        }
      }
    }
  }
`

export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost