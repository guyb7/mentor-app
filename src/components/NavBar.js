import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'

import * as actionCreators from '../store/action-creators'

class NavBar extends Component {
  openDrawer() {
    this.props.dispatch(actionCreators.setDrawer(true))
  }

  render() {
    return (
      <AppBar
        title="Teams"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={() => this.openDrawer()}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {}
}

const ConnectedNavBar = connect(mapStateToProps)(NavBar)

export default ConnectedNavBar
