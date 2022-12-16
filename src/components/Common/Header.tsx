import React, { FunctionComponent } from 'react';
import styled from "@emotion/styled";

const HeaderWrapper = styled.header`
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: rgb(0 0 0 / 12%) 0 3px 16px;
  
  @media (max-width: 767px) {
    box-shadow: rgb(0 0 0 / 12%) 0 0 4px;
  }
`

const Container = styled.div`
  margin: 0 auto;
  padding: 0 40px;
  max-width: 1440px;
  box-sizing: border-box;

  @media (max-width: 767px) {
    padding: 0 30px;
  }
`

const Title = styled.h1`
  overflow: hidden;
  height: 90px;
  color: #333;
  font-size: 37px;
  line-height: 83px;

  @media (max-width: 767px) {
    height: 65px;
    font-size: 27px;
    line-height: 63px;
  }
`

const Header: FunctionComponent = () => {

  return (
    <HeaderWrapper>
      <Container>
        <Title>Dev.Blog</Title>
      </Container>
    </HeaderWrapper>
  )
}

export default Header