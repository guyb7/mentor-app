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

export function loadTeams() {
  return {
    types: ['LOAD_TEAMS_REQUEST', 'LOAD_TEAMS_SUCCESS', 'LOAD_TEAMS_FAILURE'],
    promise: () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            teams: {
              'amazon': {
                id: 'amazon',
                name: 'Amazon',
                emails: ['john@amazon.com'],
                pitch: 'Selling books online',
                keywords: ['Books', 'Online'],
                logo: 'http://www.pngall.com/wp-content/uploads/2016/03/Amazon-Logo-Transparent-PNG-180x180.png',
                notes_private: '',
                notes_public: ''
              },
              'apple': {
                id: 'apple',
                name: 'Apple',
                emails: ['mike@apple.com'],
                pitch: 'High end electronic devices',
                keywords: ['Hardware', 'Premium'],
                logo: 'https://stickybranding.com/wp-content/uploads/2016/09/Apple-Logo.png',
                notes_private: '',
                notes_public: ''
              },
              'facebook': {
                id: 'facebook',
                name: 'Facebook',
                emails: ['mark@fb.com'],
                pitch: 'Social network',
                keywords: ['Social'],
                logo: 'https://michaelromain.files.wordpress.com/2017/04/facebook-logo.png?w=183&h=183',
                notes_private: '',
                notes_public: ''
              },
              'google': {
                id: 'google',
                name: 'Google',
                emails: ['lp@google.com'],
                pitch: 'Search engine',
                keywords: ['Search'],
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png',
                notes_private: '',
                notes_public: ''
              },
              'microsoft': {
                id: 'microsoft',
                name: 'Microsoft',
                emails: ['bill@microsoft.com'],
                pitch: 'Operating system',
                keywords: ['Software'],
                logo: 'https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Microsoft-128.png',
                notes_private: '',
                notes_public: ''
              },
            }
          })
        }, 200)
      })
    }
  }
}
