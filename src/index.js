import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/reset.css';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
