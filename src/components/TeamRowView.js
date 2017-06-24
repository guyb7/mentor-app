import React from 'react'
import { withRouter } from 'react-router-dom'

class TeamRowView extends React.Component {
  navigateToTeam() {
    this.props.history.push('/teams/' + this.props.team.id)
  }

  render () {
    return (
      <tr style={style.row} onClick={() => { this.navigateToTeam() }}>
        <td style={style.logoContainer}>
          <img style={style.logo} src={this.props.team.logo} alt={this.props.team.name + ' logo'} />
        </td>
        <td style={style.name}>
          {this.props.team.name}
        </td>
        <td style={style.pitch}>
          {this.props.team.pitch}
        </td>
      </tr>
    )
  }
}

const style = {
  row: {
    cursor: 'pointer'
  },
  logoContainer: {
    width: 40
  },
  logo: {
    width: 40,
    height: 40
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
    padding: 10,
    verticalAlign: 'middle',
    width: 150
  },
  pitch: {
    fontSize: 12,
    padding: 10,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: 1,
    verticalAlign: 'middle'
  }
}

export default withRouter(TeamRowView)
