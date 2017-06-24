import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/action-creators'

import _ from 'lodash'

import TeamRowView from './TeamRowView'
import TextField from 'material-ui/TextField'

class Teams extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: ''
    }
  }

  componentDidMount() {
    this.props.dispatch(actionCreators.setNavTitle('Teams'))
    this.props.dispatch(actionCreators.loadTeams())
  }

  setFilter(str) {
    this.setState({
      ...this.state,
      filter: str
    })
  }

  fuzzyMatch (str, query) {
    const hay = str.toLowerCase()
    let i = 0, n = -1, l
    const s = query.toLowerCase()
    for (; l = s[i++] ;) if (!~(n = hay.indexOf(l, n + 1))) return false
    return true
  }

  render () {
    return (
      <div>
        <TextField
          value={this.state.filter}
          hintText="Search"
          onChange={(e, v) => {
            this.setFilter(v)
          }}
        />
        <table className="table table-striped table-hover table-condensed">
          <tbody>
            {
              _.map(_.filter(this.props.teams, t => this.fuzzyMatch(t.name, this.state.filter)), t => {
                return <TeamRowView key={t.id} team={t} />
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    teams: state.teams.data
  }
}

const ConnectedTeams = connect(mapStateToProps)(Teams)

export default ConnectedTeams
