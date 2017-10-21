import React, {Component} from 'react';

class UserVisual extends Component {

  shouldComponentUpdate() {
    console.log('#34hrt UserVisual shouldComponentUpdate? ');
    return true;
  }

  render() {
    console.log('3sdjkf is UserVisual hot? ', module.hot ? 'Yes' : 'No');
    console.log('#ksldf  props: ', this.props);
    return (
      <div style={{border: '1px solid #333', padding: 12, margin: 6}}>
        <h1>Hi from src/features/user/components/UserVisual.js</h1>
        Not updating after change: 1234
      </div>
    );
  }
}

export default UserVisual;