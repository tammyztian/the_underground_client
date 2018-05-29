import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const user = 
  { name: 'Tammy',
    weight: '115',
    height: "5'4",
    lifts:{
      bench: 80,
      deadlift: 225,
      squat: 165
    }
};


ReactDOM.render(
<Provider store={store}>
  <App user={user} />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
