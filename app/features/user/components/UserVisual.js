import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class UserVisual extends Component {

  static propTypes = {
    userActions: PropTypes.object,
  };

  shouldComponentUpdate() {
    console.log('#34hrt UserVisual shouldComponentUpdate? ');
    return true;
  }

  render() {
    console.log('#ksldf UserVisual props: ', this.props);
    return (
      <div style={{border: '1px solid #333', padding: 12, margin: 6}}>
        <h1>src/features/user/components/UserVisual.js</h1>
        <button onClick={() => this.props.userActions.get({userToken: 'foo'})}>
          Get user
        </button>
      </div>
    );
  }
}
