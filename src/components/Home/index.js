import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Header from './Header';
import Content from './Content';

const Home = ({ fixTopBar }) => (
  <Fragment>
    <Header fixTopBar={fixTopBar} />
    <Content />
  </Fragment>
);

Home.propTypes = {
  fixTopBar: bool.isRequired
};

export default Home;
