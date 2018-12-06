import React, { Component } from 'react';
import toastr from 'toastr';

import callApi from '../helpers/apiCaller';

import ComingSoon from '../components/ComingSoon';

class ComingSoonPage extends Component {
  state = {
    email: ''
  };

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  handleSubscribe = () => {
    const { email } = this.state;

    // validate email;

    callApi('interested', { email }, 'POST')
      .then(res => res.json())
      .then(({ message, type }) => {
        if (type === 'error') return Promise.reject(new Error(message));

        toastr.success(message);

        return Promise.resolve();
      })
      .catch(err => toastr.error(err.message));
  }

  render() {
    const { email } = this.state;
    return <ComingSoon email={email} handleChange={this.handleChange} subscribe={this.handleSubscribe} />
  }
}

export default ComingSoonPage;
