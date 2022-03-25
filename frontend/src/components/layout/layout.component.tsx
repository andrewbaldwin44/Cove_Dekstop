import React from 'react';

import Navbar from 'components/navbar/navbar.component';
import breakpoints from 'styles/breakpoints';

interface ILayout {
  children: JSX.Element;
}

function Layout({ children }): ILayout {
  return (
    <section>
      <Navbar />
      <main className='f-container'>{children}</main>
    </section>
  );
}

export default Layout;
