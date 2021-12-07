import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import { Provider } from 'react-redux';

// Neuer Status bei Änderungen
store.subscribe(() => { 
  console.log('state changed', store.getState());
  window.history.pushState(store.getState(), "");
});

// Initialstatus
window.history.pushState(store.getState(), "");

// Beim Zurückgehen
window.onpopstate = (event) => {
  console.log('popstate', event.state);
  store.dispatch({
    type: 'tasks/setState',
    state: event.state
  });
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

