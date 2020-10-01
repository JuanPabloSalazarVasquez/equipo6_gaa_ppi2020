import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Ppicontainer from "./container/Ppicontainer";

ReactDOM.render(
  <React.StrictMode>
    <Ppicontainer />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
