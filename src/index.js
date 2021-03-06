import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import SimpleCounter from './components/SimpleCounter';
import TwoButtonsCounter from './components/TwoButtonsCounter';
import BoundedCounter from './components/BoundedCounter';
import InitStateCounter from './components/InitStateCounter';
import CallbackCounter from './components/CallbackCounter';
import RGBCounter from './components/RGBCounter';
import RGBColors from './components/RGBColors';
import ColorPicker from './components/ColorPicker';

ReactDOM.render(
  <React.StrictMode>
    <h1>Task 1 – Counter</h1>
    <div id="grid">
      <SimpleCounter />
      <TwoButtonsCounter />
      <BoundedCounter min={-10} max={10} />
      <InitStateCounter value={5} min={-10} max={10} />
      <CallbackCounter value={5} onChange={value => console.log(value)} />
      <RGBCounter red={5} green={7} blue={10} />
      <RGBColors red={5} green={5} blue={5} color="#006363" />
      <ColorPicker value="aaffcc" onChange={color => console.log(color)} />
    </div>    
  </React.StrictMode>,
  document.getElementById('root')
);