import React from 'react';
import styled from 'styled-components';

import Navbar from 'components/navbar/navbar.component';
import breakpoints from 'styles/breakpoints';

interface IMain {
  verticalPadding?: boolean;
}

interface ILayout extends IMain {
  children: JSX.Element;
}

const Layout = ({ children, verticalPadding = true }: ILayout) => {
  return (
    <section>
      <Navbar />
      <Main verticalPadding={verticalPadding} className='o-container f-container'>
        {children}
      </Main>
    </section>
  );
};

export default Layout;

const Main = styled.main<IMain>`
  ${({ verticalPadding }) =>
    verticalPadding &&
    `
    padding-top: 20px;
    padding-bottom: 20px;

    ${breakpoints('mid')`
      padding-top: 35px;
      padding-bottom: 35px;
    `}

    ${breakpoints('large')`
      padding-top: 50px;
      padding-bottom: 50px;
    `}
  `}
`;
