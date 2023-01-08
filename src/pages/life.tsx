import React, { FunctionComponent } from "react";
import {graphql} from "gatsby";
import {PostListItemType} from "../types/PostItem.types";
import {IGatsbyImageData} from "gatsby-plugin-image";
import Template from "components/Common/Template";
import Aside from "components/Common/Aside";
import Content from "components/Common/Content";
import { TabTypes } from "../constants";


type LifePageProps = {
  location: {
    search: string
  }
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        siteUrl: string
      }
    }
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
      publicURL: string
    }
  }
}

const LifePage: FunctionComponent<LifePageProps> = function ({
 data: {
   site: {
     siteMetadata: { title, description, siteUrl, },
   },
   allMarkdownRemark: { edges },
   file: {
     childImageSharp: {
       gatsbyImageData
     },
     publicURL,
   }
 },
}) {

  const tabType = TabTypes.life;

  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
      tabType={tabType}
    >
      <Aside>

      </Aside>
      <Content>

      </Content>
    </Template>
  )
};

export default LifePage;

export const getPostList = graphql`
  query getPostList {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___id }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
      publicURL
    }
  }
`