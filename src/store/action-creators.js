import Promise from 'bluebird'

export function getTime(delay) {
  return {
    types: ['GET_TIME_REQUEST', 'GET_TIME_SUCCESS', 'GET_TIME_FAILURE'],
    promise: () => {
      return new Promise((resolve, reject) => {
        // Just simulating an async request to a server via a setTimeout
        setTimeout(() => {
          const d = new Date()
          const ms = ('000' + d.getMilliseconds()).slice(-3)
          resolve({
            time: `${d.toString().match(/\d{2}:\d{2}:\d{2}/)[0]}.${ms}`
          })
        }, delay)
      })
    }
  }
}

export function setTime(value) {
  return {
    type: 'SET_TIME',
    time: value
  }
}

export function setDrawer(value) {
  return {
    type: 'SET_DRAWER',
    is_open: value
  }
}

export function setNavTitle(value) {
  return {
    type: 'SET_NAV_TITLE',
    title: value
  }
}
