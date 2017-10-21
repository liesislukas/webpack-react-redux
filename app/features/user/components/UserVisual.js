import React, {Component} from 'react';

export default class UserVisual extends Component {

  shouldComponentUpdate() {
    console.log('#34hrt UserVisual shouldComponentUpdate? ');
    return true;
  }

  render() {
    console.log('#ksldf UserVisual props: ', this.props);
    return (
      <div style={{border: '1px solid #333', padding: 12, margin: 6}}>
        <h1>src/features/user/components/UserVisual.js</h1>
      </div>
    );
  }
}
