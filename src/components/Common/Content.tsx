import React, { FunctionComponent, ReactNode } from "react";
import styled from "@emotion/styled";

const ContentWrapper = styled.section`
  position: relative;
`

const Content: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <ContentWrapper>
      <h2 className="blind">블로그 콘텐츠</h2>
      { children }
    </ContentWrapper>
  )
}

export default Content