import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import shapes from 'shapes';

import { updateUser } from 'actions/user';

import DesignerComponent from 'components/DesignerPage';

const { userShape } = shapes;

const mapStateToProps = ({ user }) => (
  {
    user
  }
);

const mapDispatchToProps = dispatch => ({
  dUpdateUser: properties => dispatch(updateUser(properties)),
});

class DesignerPage extends Component {
  state = {
    settingsPos: 'left',
    displaySettings: false
  };

  setStylesheetProperties = (properties) => {
    const { dUpdateUser, user: { stylesheet } } = this.props;
    const newStylesheet = { ...stylesheet, ...properties };
    dUpdateUser({ stylesheet: newStylesheet });
  }

  receiveState = (newState) => this.setState(newState);

  render() {
    const { dUpdateUser, user } = this.props;
    const { settingsPos, displaySettings } = this.state;
    return (
      <DesignerComponent
        settingsPos={settingsPos}
        setState={this.receiveState}
        displaySettings={displaySettings}
        user={user}
        setStylesheet={this.setStylesheetProperties}
        updateUser={dUpdateUser}
      />
    );
  }
}

DesignerPage.propTypes = {
  user: userShape,
  dUpdateUser: func.isRequired
};

DesignerPage.defaultProps = {
  user: {
    id: '',
    stylesheet: {},
    brandName: '',
    address: {}
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DesignerPage);
