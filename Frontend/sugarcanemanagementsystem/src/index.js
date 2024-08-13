import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './ReduxStore/store';
import { Provider } from 'react-redux';

// ReactDOM.render(
//   <Provider store={store}>
//   <Router>
//     <App />
//   </Router>
//   </Provider>,
//   document.getElementById('root')
// );

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  
)



