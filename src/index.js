import React from 'react';
import ReactDOM from 'react-dom';
import SimpleCounter from './components/SimpleCounter';
import TwoButtonsCounter from './components/TwoButtonsCounter';
import BoundedCounter from './components/BoundedCounter';

ReactDOM.render(
  <React.StrictMode>
    <h1>Задача 1 – Counter</h1>
    <SimpleCounter />
    <TwoButtonsCounter />
    <BoundedCounter min={-10} max={10} />
  </React.StrictMode>,
  document.getElementById('root')
);

