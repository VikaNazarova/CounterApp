import React from 'react';
import ReactDOM from 'react-dom';
import SimpleCounter from './components/SimpleCounter';
import TwoButtonsCounter from './components/TwoButtonsCounter';
import BoundedCounter from './components/BoundedCounter';
import InitStateCounter from './components/InitStateCounter';
import CallbackCounter from './components/CallbackCounter';

ReactDOM.render(
  <React.StrictMode>
    <h1>Задача 1 – Counter</h1>
    <SimpleCounter />
    <TwoButtonsCounter />
    <BoundedCounter min={-10} max={10} />
    <InitStateCounter value={5} min={-10} max={10} />
    <CallbackCounter value={5} />
  </React.StrictMode>,
  document.getElementById('root')
);

