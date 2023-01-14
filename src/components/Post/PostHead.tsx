import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import PostHeadInfo, { PostHeadInfoProps } from 'components/Post/PostHeadInfo'

type GatsbyImgProps = {
  image: IGatsbyImageData
  alt: string
  className?: string
}

type PostHeadProps = PostHeadInfoProps & {
  thumbnail: IGatsbyImageData
}

const PostHeadWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 520px;
  
  @media (max-width: 767px) {
    height: 400px;
  }
`;

const BackgroundImage = styled(( props: GatsbyImgProps ) => (
    <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
  z-index: -1;
  width: 100%;
  height: 520px;
  filter: brightness(0.25);

  @media (max-width: 767px) {
    height: 400px;
  }
`;

const PostHead: FunctionComponent<PostHeadProps> = function ({
  title,
  date,
  categories,
  thumbnail,
  tabType,
}) {
    return (
        <PostHeadWrapper>
            <BackgroundImage image={thumbnail} alt="thumbnail" />
            <PostHeadInfo title={title} date={date} categories={categories} tabType={tabType} />
        </PostHeadWrapper>
    )
}

export default PostHead