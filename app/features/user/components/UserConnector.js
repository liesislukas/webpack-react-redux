import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserVisual from './UserVisual';

import {actionCreators as userActions, selector as userSelector} from '../index';

class UserConnector extends Component {

  shouldComponentUpdate() {
    console.log('3fdkskfl UserConnector shouldComponentUpdate? ');
    return true;
  }

  render() {
    return (
      <div>
        <UserVisual {...this.props}/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return userSelector(state);
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserConnector);
