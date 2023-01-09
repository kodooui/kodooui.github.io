import React, { FunctionComponent, ReactNode, useState } from "react";
import { Helmet } from 'react-helmet';
import styled from "@emotion/styled";
import GlobalStyle from "components/Common/GlobalStyle";
import Header, { GithubLink, HeaderWrapper, TabWrap } from "components/Common/Header";
import Footer from "components/Common/Footer";
import Main from "components/Common/Main";
import { TabType } from "../../types/Tab.types";
import { AsideWrapper } from "components/Common/Aside";

type TemplateProps = {
  title: string;
  description: string;
  url: string;
  image: string;
  tabType: TabType;
  children: ReactNode;
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (max-width: 767px) {
    &.menu-open {
      & ${AsideWrapper} {
        display: block;
      }
      & ${HeaderWrapper} {
        background-color: #fff;
        backdrop-filter: none;
        height: 100vh;
      }
      & ${GithubLink} {
        display: inline-block;
      }
      & ${TabWrap} {
        display: flex;
      }
    }
  }
`

const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  image,
  tabType,
  children,
}) {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
      setMenu(!menu);
    }

    return (
        <Container id="wrap" className={menu ? 'menu-open' : ''}>
            <Helmet>
              <title>{title}</title>
              <meta name="description" content={description} />

              <meta property="og:type" content="website" />
              <meta property="og:title" content={title} />
              <meta property="og:description" content={description} />
              <meta property="og:image" content={image} />
              <meta property="og:url" content={url} />
              <meta property="og:site_name" content={title} />

              <meta name="twitter:card" content="summary" />
              <meta name="twitter:title" content={title} />
              <meta name="twitter:description" content={description} />
              <meta name="twitter:image" content={image} />
              <meta name="twitter:site" content="kodooui" />
              <meta name="twitter:creator" content="kodooui" />

              <meta name="google-site-verification" content="z248EgOXHmls3k1Vo_GYmt1P9rnVs2kt8kqQhccGB20" />
              <meta name="naver-site-verification" content="8d88e79b580f7d70d5656a174363f3192090372c" />

              <html lang="ko" />
            </Helmet>

            <GlobalStyle />

            <Header
              tab={tabType}
              menu={menu}
              toggleMenu={toggleMenu}
            />
            <Main>
              { children }
            </Main>
            <Footer />
        </Container>
    )
}

export default Template