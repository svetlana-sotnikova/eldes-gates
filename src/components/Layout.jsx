import styled from '@emotion/styled';
import { typography } from '../typography';
import { Root } from './Root';

export const Layout = ({ children, title }) => (
  <Root>
    <Page>
      <ContentWrapper>
        <Content>
          <h1 className={typography.h1}>{title}</h1>
          {children}
        </Content>
      </ContentWrapper>

      <Footer>
        <p>
          <Link href="/login">Logout</Link>
          <span style={{ verticalAlign: 'middle' }}>·</span>
          <Link href="#">Feature request</Link>
        </p>
      </Footer>
    </Page>
  </Root>
);

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: aliceblue;
  min-height: 100vh;
  padding: 0.5em 1em;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

const Content = styled.div`
  flex-grow: 0;
  flex-basis: 300px;
  flex-shrink: 1;
`;

const Footer = styled.div`
  display: flex;
`;

const Link = styled.a`
  text-align: center;
  margin: 0.5em;
  font-size: 0.75em;
  width: 100%;
  color: inherit;
`;
