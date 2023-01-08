import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import { TabType } from "../../types/Tab.types";
import { TabTypes } from "../../constants";

export type PostHeadInfoProps = {
  title: string
  date: string
  categories: string[]
  tabType: TabType;
}

const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding: 60px 40px;
  color: #fff;
  box-sizing: border-box;
`

const PrevPageLink = styled(Link)`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  color: #000000;
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 18px;
  }
`

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  margin: auto auto 0;
  width: 100%;
  max-width: 768px;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 45px;
  font-weight: 800;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`

const PostData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px auto 0;
  width: 100%;
  max-width: 768px;
  font-size: 18px;
  font-weight: 700;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 15px;
    font-weight: 400;
  }
`

const PostHeadInfo: FunctionComponent<PostHeadInfoProps> = function ({
  title,
  date,
  categories,
  tabType
}) {

  return (
    <PostHeadInfoWrapper>
      <PrevPageLink to={tabType === TabTypes.dev ? '/' : '/life'}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </PrevPageLink>
      <Title>{title}</Title>
      <PostData>
        <span>{categories.join(' · ')}</span>
        <time dateTime={date.replace(/\./g, '-')}>{date}</time>
      </PostData>
    </PostHeadInfoWrapper>
  )
}

export default PostHeadInfo