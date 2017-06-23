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
