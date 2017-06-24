import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../store/action-creators'

import _ from 'lodash'

import Chip from 'material-ui/Chip'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class TeamEdit extends React.Component {
  componentDidMount() {
    this.props.dispatch(actionCreators.setNavTitle(''))
    this.props.dispatch(actionCreators.loadTeams())
  }

  handleRequestDelete = (i, data) => {
    console.log('chip', i, data)
  }

  renderChip(data, i) {
    return (
      <Chip
        key={i}
        onRequestDelete={() => this.handleRequestDelete(i, data)}
        style={style.chip}
      >
        {data}
      </Chip>
    )
  }

  render () {
    const team = _.find(this.props.teams.data, t => { return t.id ===  this.props.match.params.id })
    if (!team) {
      return (<div></div>)
    }
    console.log('team', team)
    return (
      <div>
        <img style={style.logo} src={team.logo} alt={team.name + ' logo'}/>
        <h1>{team.name}</h1>
        <h4>{team.pitch}</h4>
        <div style={style.wrapper}>
          {team.keywords.map(this.renderChip, this)}
        </div>
        <div style={style.emails}>
          {team.emails.map((e, i) => {
            return <div key={i}>{e}</div>
          })}
        </div>
        <TextField
          hintText="Private notes"
          multiLine={true}
          rows={1}
          rowsMax={4}
        />
        <br/>
        <TextField
          hintText="Public notes"
          multiLine={true}
          rows={1}
          rowsMax={4}
        />
        <h4>Session</h4>
        <TextField
          hintText="Action items"
          multiLine={true}
          rows={1}
          rowsMax={4}
        />
        <br/>
        <RaisedButton
          label="Add Reminder"
        />
        <br/>
        <br/>
        <RaisedButton
          label="Send Email"
        />
      </div>
    )
  }
}

const style = {
  logo: {
    float: 'right',
    width: 40,
    height: 40,
    margin: 20
  },
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  emails: {

  }
}

const mapStateToProps = (state) => {
  return {
    teams: state.teams
  }
}
const ConnectedTeamEdit = connect(mapStateToProps)(TeamEdit)
export default ConnectedTeamEdit
