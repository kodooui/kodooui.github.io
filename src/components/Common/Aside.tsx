import React, { FunctionComponent, ReactNode } from "react";
import styled from "@emotion/styled";

export const AsideWrapper = styled.aside`
  position: sticky;
  top: 90px;
  height: calc(100vh - 90px);

  @media (max-width: 767px) {
    display: none;
    z-index: 999;
    position: fixed;
    top: 160px;
    left: 0;
    width: 100%;
    height: calc(100vh - 140px);
    background-color: #fff;
    overflow-y: scroll;
  }
`

const Aside: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <AsideWrapper>
        { children }
    </AsideWrapper>
  )
}

export default Aside