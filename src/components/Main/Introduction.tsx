import React, { FunctionComponent } from 'react';
import styled from "@emotion/styled";
import ProfileImage from "components/Main/ProfileImage";
import {IGatsbyImageData} from "gatsby-plugin-image";

type IntroductionProps = {
  profileImage: IGatsbyImageData;
}

const TabButtons = {
  close: '#fc5c65',
  hide: '#f2bd4f',
  full: '#66c454',
}

const Wrapper = styled.div`
  overflow: hidden;
  margin: 0 auto;
  max-width: 468px;
  border: 1px solid #ddd;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 10%) 0 3px 8px;
  box-sizing: border-box;
`

const TabBar = styled.div`
  background-color: #dfe1e5;
  height: 45px;
  
  &::after {
    content: '';
    display: block;
    clear: both;
  }
`

const ButtonGroup = styled.div`
  float: left;
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 20px;
`

const Button = styled.span<{ color: string }>`
  flex-shrink: 0;
  position: relative;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  
  & + span {
    margin-left: 8px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 50%;
  }
`

const TabList = styled.ul`
  overflow: hidden;
  display: flex;
  align-items: end;
  justify-content: flex-start;
  height: 100%;
  padding-left: 20px;
`

const TabItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 10px;
  height: 36px;
  border-radius: 10px 10px 0 0;
  background-color: #fff;
  font-size: 15px;
  font-weight: 500;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 20px;
    height: 10px;
  }
  &::before {
    left: -20px;
    border-radius: 0 0 20px 0;
    box-shadow: 10px 0 0 0 #fff;
  }
  &::after {
    right: -20px;
    border-radius: 0 0 0 20px;
    box-shadow: -10px 0 0 0 #fff;
  }
`

const TabCotent = styled.div`
  padding: 28px 40px;
  box-sizing: border-box;

  @media (max-width: 767px) {
    padding: 16px 20px;
  }
`

const InfoText = styled.span`
  position: relative;
  display: block;
  font-size: 17px;
  font-weight: 500;
  line-height: 40px;
`

const Highlight = styled.em`
  margin-right: 8px;
  padding: 3px 5px;
  border-radius: 8px;
  background-color: #eff1f2;
  font-size: 17px;
  font-weight: 600;
`

const GithubLink = styled.a`
  display: inline-block;
  color: #4b7bec;
  text-decoration: underline;
  
  &::before {
    content: '';
    display: inline-block;
    margin: 6px 4px 0 0;
    width: 28px;
    height: 28px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 72 72'%3E%3Cpath fill='%23d0cfce' d='M29.044 61.611c0-.927-.035-3.98-.035-7.764 0-2.647.874-4.373 1.863-5.253-6.227-.721-12.779-3.153-12.779-14.034 0-3.098 1.096-5.632 2.887-7.615-.286-.72-1.253-3.606.278-7.514 0 0 2.355-.764 7.716 2.908 2.238-.628 4.638-.946 7.027-.951 2.384.005 4.785.323 7.027.951 5.357-3.672 7.711-2.908 7.711-2.908 1.532 3.908.57 6.795.278 7.514 1.796 1.983 2.882 4.514 2.882 7.615 0 10.905-6.56 13.307-12.817 14.008 1.013.882 1.909 2.611 1.909 5.263 0 3.792-.035 6.85-.035 7.78 0 .762.505 1.641 1.93 1.369 11.145-3.758 19.177-14.396 19.177-26.932 0-15.678-12.567-28.388-28.067-28.388-15.494 0-28.06 12.707-28.06 28.388 0 12.541 8.04 23.182 19.202 26.934 1.395.262 1.906-.614 1.906-1.37z'/%3E%3Cg style='fill:none;stroke:%23000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-width:2'%3E%3Cpath d='M29.044 61.611c0-.927-.035-3.98-.035-7.764 0-2.647.874-4.373 1.863-5.253-6.227-.721-12.779-3.153-12.779-14.034 0-3.098 1.096-5.632 2.887-7.615-.286-.72-1.253-3.606.278-7.514 0 0 2.355-.764 7.716 2.908 2.238-.628 4.638-.946 7.027-.951 2.384.005 4.785.323 7.027.951 5.357-3.672 7.711-2.908 7.711-2.908 1.532 3.908.57 6.795.278 7.514 1.796 1.983 2.882 4.514 2.882 7.615 0 10.905-6.56 13.307-12.817 14.008 1.013.882 1.909 2.611 1.909 5.263 0 3.792-.035 6.85-.035 7.78 0 .762.505 1.641 1.93 1.369 11.145-3.758 19.177-14.396 19.177-26.932 0-15.678-12.567-28.388-28.067-28.388-15.494 0-28.06 12.707-28.06 28.388 0 12.541 8.04 23.182 19.202 26.934 1.395.262 1.906-.614 1.906-1.37z'/%3E%3Cpath d='M16.29 48.09c2.568.78 3.58 1.635 4.789 3.661 1.205 2.026 2.62 4.287 7.933 2.999'/%3E%3C/g%3E%3C/svg%3E");
    background-size: cover;
    vertical-align: top;
  }
`

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage
}) {
  return (
    <Wrapper>
      <TabBar>
        <ButtonGroup>
          {Object.entries(TabButtons).map(([keyword, color]) => <Button key={keyword} color={color} />)}
        </ButtonGroup>
        <TabList>
          <TabItem>
            <ProfileImage
              profileImage={profileImage}
              width={28}
              height={28}
            />
            <span style={{padding: '0 6px 0 8px'}}>Kodoo</span>
          </TabItem>
        </TabList>
      </TabBar>
      <TabCotent>
        <InfoText><Highlight>👨‍💻 UI Dev</Highlight> 2018.09 ~ 2022.03</InfoText>
        <InfoText><Highlight>🌱 FE Dev</Highlight> 2022.04 ...</InfoText>
        <InfoText><GithubLink href="https://github.com/kodooui" target="_blank">Github</GithubLink></InfoText>
      </TabCotent>
    </Wrapper>
  )
}

export default Introduction