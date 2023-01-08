import React, { FunctionComponent } from 'react';
import styled from "@emotion/styled";
import {Link} from "gatsby";
import {PostFrontmatterType} from "../../types/PostItem.types";
import {GatsbyImage} from "gatsby-plugin-image";

type PostItemProps = PostFrontmatterType & { link: string }

const PostItemWrapper = styled.article`
  position: relative;

  @media (max-width: 767px) {
    & + article {
      margin-top: 40px;
    }
  }
`;

const ThumbnailWrapper = styled.div`
  overflow: hidden;
  position: relative;
  padding-top: 67.5%;
  border-radius: 16px;
  box-shadow: rgb(0 0 0 / 12%) 0 0 4px;
  transition-property: transform, box-shadow;
  transition-duration: 0.2s;
  transition-timing-function: ease;
`

const ThumbnailImage = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const PostItemContent = styled.div`
  padding: 25px 2px;

  @media (max-width: 767px) {
    padding: 12px 2px;
  }
`;

const Title = styled.h3`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 30px;
  font-weight: 600;

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px -5px;

  @media (max-width: 767px) {
    margin: 8px -5px;
  }
`;

const CategoryItem = styled.div`
  margin: 2.5px 5px;
  padding: 3px 2px;
  font-size: 19px;
  font-weight: 500;
  color: #5d89ff;

  @media (max-width: 767px) {
    font-size: 16px;
    margin: 2.5px 4px;
  }
`;

const Summary = styled.p`
  display: -webkit-box;
  overflow: hidden;
  margin: 13px 0;
  padding: 0 2px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 17px;
  line-height: 22px;
  opacity: 0.8;

  @media (max-width: 767px) {
    margin: 8px 0;
    font-size: 15px;
    line-height: 19px;
  }
`;

const Date = styled.time`
  display: block;
  font-size: 15px;
  font-weight: 400;
  opacity: 0.7;

  @media (max-width: 767px) {
    padding: 0 2px;
    font-size: 14px;
  }
`;


const PostItemLink = styled(Link)`
  cursor: pointer;

  &:hover ${ThumbnailWrapper} {
    transform: translateY(-10px);
    box-shadow: #efefef 0 4px 12px;
  }
  &:hover ${PostItemContent} {
    filter: contrast(200%);
  }
`;

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail: {
    childImageSharp: {
      gatsbyImageData
    }
  },
  link,
}) {
  return (
    <PostItemWrapper>
      <PostItemLink to={link}>
        <ThumbnailWrapper>
          <ThumbnailImage image={gatsbyImageData} alt="Post Item Image" />
        </ThumbnailWrapper>

        <PostItemContent>
          <Category>
            {categories.map(category => (
              <CategoryItem key={category}>{category}</CategoryItem>
            ))}
          </Category>
          <Title>{title}</Title>
          <Summary>{summary}</Summary>
          <Date dateTime={date.replace(/\./g, '-')}>{date}</Date>
        </PostItemContent>
      </PostItemLink>
    </PostItemWrapper>
  )
}

export default PostItem;