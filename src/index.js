import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';
// import registerServiceWorker from './registerServiceWorker';

import createStore from './store/createStore'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = createStore()

ReactDOM.render(<App store={store} />, document.getElementById('root'));

// registerServiceWorker();
