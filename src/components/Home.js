import React from 'react'
import { connect } from 'react-redux'

import * as actionCreators from '../store/action-creators'

class Home extends React.Component {
  onTimeButtonClick (delay) {
    this.props.dispatch(actionCreators.getTime(delay))
  }
  onTimeButtonClick2 (value) {
    this.props.dispatch(actionCreators.setTime(value))
  }
  render () {
    var { frozen, time } = this.props
    var attrs = {}
    const DELAY = 500 // in ms

    if (frozen) {
        attrs = {
          disabled: true
        }
    }

    return (
      <div>
        <span>
          <b>What time is it?</b> { time ? `It is currently ${time}` : 'No idea yet...' }
        </span>
        <br /> <br />
        <i>
          When clicking the button below, the time will be provided after a {DELAY}ms delay.<br />
          Try to change this value (in <b>src/home.jsx - line 77</b>) to verify that the delay given correctly impacts our UI.
        </i>
        <br />
        <button { ...attrs } onClick={() => this.onTimeButtonClick(DELAY)}>Get time!</button>
        <button { ...attrs } onClick={() => this.onTimeButtonClick2('Hey')}>Set time!</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    frozen: state._time.frozen,
    time: state._time.time
  }
}

const ConnectedHome = connect(mapStateToProps)(Home)

export default ConnectedHome
