import React from 'react'
import { connect } from 'react-redux'

import * as actionCreators from '../store/action-creators'

class Teams extends React.Component {
  componentDidMount() {
    this.props.dispatch(actionCreators.setNavTitle('Teams'))
  }

  render () {
    return (
      <div>
        Teams page
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const ConnectedTeams = connect(mapStateToProps)(Teams)

export default ConnectedTeams
