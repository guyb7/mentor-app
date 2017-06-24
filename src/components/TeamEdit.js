import React from 'react'
import { withRouter } from 'react-router-dom'

class TeamRowView extends React.Component {
  render () {
    return (
      <div>
        <h1>{ this.props.match.params.id }</h1>
      </div>
    )
  }
}

const style = {
}

export default withRouter(TeamRowView)
