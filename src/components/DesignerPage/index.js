import React, { Fragment } from 'react';
import { bool, func, string } from 'prop-types';
import styles from './styles.scss';

import Header from './Header';
import Content from './Content';
import Settings from './Settings';

const DesignerPage = ({ settingsPos, setState, displaySettings }) => (
  <Fragment>
    <Header setState={setState} />
    <Content />
    <Settings position={settingsPos} setState={setState} display={displaySettings} />
    <button
      type="button"
      className={styles.displaySettings}
      onClick={() => setState({ displaySettings: !displaySettings })}
    >
      <i className="fa fa-cog" />
    </button>
  </Fragment>
);

DesignerPage.propTypes = {
  settingsPos: string.isRequired,
  setState: func.isRequired,
  displaySettings: bool.isRequired
};

export default DesignerPage;
