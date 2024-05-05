/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-deprecated */
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
