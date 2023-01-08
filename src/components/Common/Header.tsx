import React, { FunctionComponent, ReactNode } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { TabType } from "../../types/Tab.types";
import { TabTypes } from "../../constants";

type HeaderProps = {
  tab: TabType;
}

type TabItemProps = {
  active: boolean;
}

type GatsbyLinkProps = {
  children: ReactNode;
  className?: string;
  to: string;
} & TabItemProps;

const HeaderWrapper = styled.header`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
`

const Container = styled.div`
  display: grid;
  margin: 0 auto;
  padding: 0 40px;
  max-width: 1440px;
  box-sizing: border-box;
  grid-template-columns: 22fr 65fr 13fr;
`

const Title = styled.h1`
  overflow: hidden;
  height: 90px;
  color: #333;
  font-size: 37px;
  line-height: 83px;
`

const TabWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const TabGroup = styled.nav`
  position: relative;
  overflow: hidden;
  border-radius: 55px;
  background-color: #fff;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid #333;
    border-radius: 55px;
  }
`

const Tab = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<TabItemProps>`
  float: left;
  z-index: 2;
  position: relative;
  width: 124px;
  height: 50px;
  border-radius: 55px;
  background-color: ${({ active }) => active && '#3f3d3f'};
  color: ${({ active }) => active ? '#fff' : '#3f3d3f'};
  font-size: 19px;
  font-weight: bold;
  line-height: 48px;
  text-align: center;
  
  & + a {
    margin-left: -14px;
  }
`

const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const GithubLink = styled.a`
  display: inline-block;
  width: 42px;
  height: 42px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 72 72'%3E%3Cpath fill='%23d0cfce' d='M29.044 61.611c0-.927-.035-3.98-.035-7.764 0-2.647.874-4.373 1.863-5.253-6.227-.721-12.779-3.153-12.779-14.034 0-3.098 1.096-5.632 2.887-7.615-.286-.72-1.253-3.606.278-7.514 0 0 2.355-.764 7.716 2.908 2.238-.628 4.638-.946 7.027-.951 2.384.005 4.785.323 7.027.951 5.357-3.672 7.711-2.908 7.711-2.908 1.532 3.908.57 6.795.278 7.514 1.796 1.983 2.882 4.514 2.882 7.615 0 10.905-6.56 13.307-12.817 14.008 1.013.882 1.909 2.611 1.909 5.263 0 3.792-.035 6.85-.035 7.78 0 .762.505 1.641 1.93 1.369 11.145-3.758 19.177-14.396 19.177-26.932 0-15.678-12.567-28.388-28.067-28.388-15.494 0-28.06 12.707-28.06 28.388 0 12.541 8.04 23.182 19.202 26.934 1.395.262 1.906-.614 1.906-1.37z'/%3E%3Cg style='fill:none;stroke:%23000;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-width:2'%3E%3Cpath d='M29.044 61.611c0-.927-.035-3.98-.035-7.764 0-2.647.874-4.373 1.863-5.253-6.227-.721-12.779-3.153-12.779-14.034 0-3.098 1.096-5.632 2.887-7.615-.286-.72-1.253-3.606.278-7.514 0 0 2.355-.764 7.716 2.908 2.238-.628 4.638-.946 7.027-.951 2.384.005 4.785.323 7.027.951 5.357-3.672 7.711-2.908 7.711-2.908 1.532 3.908.57 6.795.278 7.514 1.796 1.983 2.882 4.514 2.882 7.615 0 10.905-6.56 13.307-12.817 14.008 1.013.882 1.909 2.611 1.909 5.263 0 3.792-.035 6.85-.035 7.78 0 .762.505 1.641 1.93 1.369 11.145-3.758 19.177-14.396 19.177-26.932 0-15.678-12.567-28.388-28.067-28.388-15.494 0-28.06 12.707-28.06 28.388 0 12.541 8.04 23.182 19.202 26.934 1.395.262 1.906-.614 1.906-1.37z'/%3E%3Cpath d='M16.29 48.09c2.568.78 3.58 1.635 4.789 3.661 1.205 2.026 2.62 4.287 7.933 2.999'/%3E%3C/g%3E%3C/svg%3E");
  background-size: cover;
`

const Header: FunctionComponent<HeaderProps> = ({ tab }) => {
  return (
    <HeaderWrapper>
      <Container>
        <Title>{tab}.Blog</Title>
        <TabWrap>
          <TabGroup>
            {Object.entries(TabTypes).map(([key, value]) => (
              <Tab
                to={key === 'dev' ? '/' : '/' + key}
                active={tab === value}
                key={value}
              >{value}</Tab>
            ))}
          </TabGroup>
        </TabWrap>
        <LinkGroup>
          <GithubLink
            href="https://github.com/kowoo0"
            target="_blank"
          ><span className="blind">github</span></GithubLink>
        </LinkGroup>
      </Container>
    </HeaderWrapper>
  )
}

export default Header