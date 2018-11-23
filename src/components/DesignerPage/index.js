import React, { Fragment } from 'react';
import uuid from 'uuid/v4';
import { bool, func, string } from 'prop-types';
import shapes from '@shapes';
import styles from './styles.scss';

import Header from './Header';
import Content from './Content';
import Settings from './Settings/index';
import BannerModal from './Settings/BannerModal';

const { userShape } = shapes;

const DesignerPage = ({ settingsPos, setState, displaySettings, user, setStylesheet, updateUser }) => {
  const renderContentModals = () =>
    user.content.map(({ type }, index) =>
      type === 'banner'
        ? <BannerModal key={uuid()} id={`BM-${index}`} title="Configuracion de Banner" />
        : null
    );

  return (
    <Fragment>
      <Header stylesheet={user.stylesheet || {}} />
      <Content user={user} />
      <Settings
        position={settingsPos}
        setState={setState}
        display={displaySettings}
        user={user}
        setStylesheet={setStylesheet}
        updateUser={updateUser}
      />
      <button
        type="button"
        className={styles.displaySettings}
        onClick={() => setState({ displaySettings: !displaySettings })}
      >
        <i className="fa fa-cog" />
      </button>
      {renderContentModals()}
    </Fragment>
  );
};

DesignerPage.propTypes = {
  settingsPos: string.isRequired,
  setState: func.isRequired,
  displaySettings: bool.isRequired,
  setStylesheet: func.isRequired,
  updateUser: func.isRequired,
  user: userShape
};

DesignerPage.defaultProps = {
  user: {}
};

export default DesignerPage;
