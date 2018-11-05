import React, { Component } from 'react';

import DesignerComponent from '@components/DesignerPage';

class DesignerPage extends Component {
  state = {
    settingsPos: 'left',
    displaySettings: false
  };

  receiveState = (newState) => this.setState(newState);

  render() {
    const { settingsPos, displaySettings } = this.state;
    return (
      <DesignerComponent
        settingsPos={settingsPos}
        setState={this.receiveState}
        displaySettings={displaySettings}
      />
    )
  }
}

export default DesignerPage;
