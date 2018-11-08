import React, { Fragment } from 'react';
import { bool, func, string } from 'prop-types';
import shapes from '@shapes';
import styles from './styles.scss';

import Header from './Header';
import Content from './Content';
import Settings from './Settings';

const { userShape } = shapes;

const DesignerPage = ({ settingsPos, setState, displaySettings, user, setStylesheet }) => (
  <Fragment>
    <Header stylesheet={user.stylesheet || {}} />
    <Content />
    <Settings
      position={settingsPos}
      setState={setState}
      display={displaySettings}
      user={user}
      setStylesheet={setStylesheet}
    />
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
  displaySettings: bool.isRequired,
  setStylesheet: func.isRequired,
  user: userShape
};

DesignerPage.defaultProps = {
  user: {}
};

export default DesignerPage;
