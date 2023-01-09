import React, { FunctionComponent, useMemo, useState } from "react";
import CategoryList, {CategoryListProps} from "components/Main/CategoryList";
import PostList from "components/Main/PostList";
import {graphql} from "gatsby";
import {PostListItemType} from "../types/PostItem.types";
import {IGatsbyImageData} from "gatsby-plugin-image";
import Template from "components/Common/Template";
import Aside from "components/Common/Aside";
import Content from "components/Common/Content";
import Container from "components/Main/Container";
import { TabTypes } from "../constants";


type IndexPageProps = {
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

const IndexPage: FunctionComponent<IndexPageProps> = function ({
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
  const [selectedCategory, setCategory] = useState('All');
  const changeCategory = (category: string) => {
    setCategory(category);
  }

  const tabType = TabTypes.dev;

  const categoryEntities = useMemo(
    () =>
      edges.reduce(
        (
          list: CategoryListProps['categoryEntities'],
          {
            node: {
              frontmatter: { categories },
            },
          }: PostListItemType
        ) => {
          categories.forEach(category => {
            if (list[category] === undefined) list[category] = 1;
            else list[category]++;
          });

          list['All']++;

          return list;
        },
        { All: 0 },
      ),
    [],
  )

  return (
    <Template
      title={title}
      description={description}
      url={siteUrl}
      image={publicURL}
      tabType={tabType}
    >
      <Container>
        <Aside>
          <CategoryList
            selectedCategory={selectedCategory}
            categoryEntities={categoryEntities}
            changeCategory={changeCategory}
          />
        </Aside>
        <Content>
          <PostList
            selectedCategory={selectedCategory}
            posts={edges}
          />
        </Content>
      </Container>
    </Template>
  )
};

export default IndexPage;

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
      filter: {fields: {slug: {glob: "/dev/*"}}},
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