import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Ppicontainer from './Container/Ppicontainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Ppicontainer />, document.getElementById('root'));

serviceWorker.unregister();