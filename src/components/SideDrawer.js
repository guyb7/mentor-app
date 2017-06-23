import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actionCreators from '../store/action-creators'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

class SideDrawer extends Component {
  onRequestChange(open) {
    this.props.dispatch(actionCreators.setDrawer(open))
  }

  changePage(page) {
    this.props.history.push(page)
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
        <MenuItem onTouchTap={() => this.changePage('/')}>
          Home
        </MenuItem>
        <MenuItem onTouchTap={() => this.changePage('/teams')}>
          Teams
        </MenuItem>
        <MenuItem onTouchTap={() => this.changePage()}>
          Calendar
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

export default withRouter(ConnectedSideDrawer)
