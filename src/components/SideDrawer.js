import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actionCreators from '../store/action-creators'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

class SideDrawer extends Component {
  onRequestChange(open) {
    this.props.dispatch(actionCreators.setDrawer(open))
  }

  handleClose() {
    this.onRequestChange(false)
  }

  render() {
    return (
      <Drawer
        docked={false}
        width={200}
        open={this.props.is_open}
        onRequestChange={(open) => this.onRequestChange(open)}
      >
        <MenuItem onTouchTap={() => this.handleClose()}>
          Teams
        </MenuItem>
        <MenuItem onTouchTap={() => this.handleClose()}>
          Calendar
        </MenuItem>
        <MenuItem onTouchTap={() => this.handleClose()}>
          History
        </MenuItem>
      </Drawer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    is_open: state.drawer.is_open
  }
}

const ConnectedSideDrawer = connect(mapStateToProps)(SideDrawer)

export default ConnectedSideDrawer
