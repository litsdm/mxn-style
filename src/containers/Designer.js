import React, { Component } from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import shapes from '@shapes';

import { setStylesheet } from '@actions/user';

import DesignerComponent from '@components/DesignerPage';

const { userShape } = shapes;

const mapStateToProps = ({ user }) => (
  {
    user
  }
);

const mapDispatchToProps = dispatch => ({
  dSetStylesheet: stylesheet => dispatch(setStylesheet(stylesheet)),
});

class DesignerPage extends Component {
  state = {
    settingsPos: 'left',
    displaySettings: false
  };

  setStylesheetProperties = (properties) => {
    const { dSetStylesheet, user: { stylesheet } } = this.props;
    dSetStylesheet({ ...stylesheet, ...properties });
  }

  receiveState = (newState) => this.setState(newState);

  render() {
    const { user } = this.props;
    const { settingsPos, displaySettings } = this.state;
    return (
      <DesignerComponent
        settingsPos={settingsPos}
        setState={this.receiveState}
        displaySettings={displaySettings}
        user={user}
        setStylesheet={this.setStylesheetProperties}
      />
    );
  }
}

DesignerPage.propTypes = {
  user: userShape,
  dSetStylesheet: func.isRequired
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
