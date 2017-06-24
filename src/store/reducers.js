var initialTimeState = {}

export function _time(state = initialTimeState, action) {
  switch (action.type) {
    case 'GET_TIME_REQUEST':
      return {
        ...state,
        frozen: true
      }
    case 'GET_TIME_SUCCESS':
      return {
        ...state,
        time: action.result.time,
        frozen: false
      }
    case 'GET_TIME_FAILURE':
      return {
        ...state,
        frozen: false
      }
    case 'SET_TIME':
      return {
        ...state,
        time: action.time
      }
    default:
      return state
  }
}

export function drawer(state = { is_open: false }, action) {
  switch (action.type) {
    case 'SET_DRAWER':
      return {
        ...state,
        is_open: action.is_open
      }
    default:
      return state
  }
}

export function navbar(state = { title: '' }, action) {
  switch (action.type) {
    case 'SET_NAV_TITLE':
      return {
        ...state,
        title: action.title
      }
    default:
      return state
  }
}

export function teams(state = { is_loading: false, data: {} }, action) {
  switch (action.type) {
    case 'LOAD_TEAMS_REQUEST':
      return {
        ...state,
        is_loading: true
      }
    case 'LOAD_TEAMS_FAILURE':
      return {
        ...state,
        is_loading: false
      }
    case 'LOAD_TEAMS_SUCCESS':
      return {
        ...state,
        data: action.result.teams
      }
    default:
      return state
  }
}
