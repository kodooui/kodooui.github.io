import React, {FunctionComponent} from 'react';
import styled from "@emotion/styled";
import PostItem from "components/Main/PostItem";
import {PostListItemType} from "../../types/PostItem.types";
import useInfiniteScroll, {useInfiniteScrollType} from "hooks/useInfiniteScroll";

type PostListProps = {
  selectedCategory: string;
  posts: PostListItemType[]
}

const PostListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 42px;
  padding: 60px 40px;
  box-sizing: border-box;
  
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 0;
    padding: 20px 30px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 1fr;
    gap: 30px;
    padding-left: 0;
  }
  @media (min-width: 1024px) and (max-width: 1359px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding-left: 0;
  }
`;

const PostList: FunctionComponent<PostListProps> = function ({
  selectedCategory,
  posts,
}) {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts
  );

  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(
        ({
           node: { id, fields: { slug }, frontmatter },
         }: PostListItemType) => (
          <PostItem
            {...frontmatter}
            link={slug}
            key={id}
          />
        ),
      )}
    </PostListWrapper>
  )
}

export default PostList;