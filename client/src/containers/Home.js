import React, { Component } from 'react';

import Home from 'components/Home';

class HomePage extends Component {
  state = {
    fixTopBar: false
  };

  componentDidMount() {
    this.handleWindowScroll()
  }

  handleWindowScroll = () => {
    window.onscroll = () => {
      const { fixTopBar } = this.state;
      if (window.scrollY > 54 && !fixTopBar) this.setState({ fixTopBar: true });
      else if (window.scrollY < 55 && fixTopBar) this.setState({ fixTopBar: false });
    }
  }

  render() {
    const { fixTopBar } = this.state;
    return <Home fixTopBar={fixTopBar} />;
  }
}

export default HomePage;
