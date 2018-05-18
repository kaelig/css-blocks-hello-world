import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

import styles from './index.block.css';

ReactDOM.render(
  <div className={styles}>
    <p>Hello CSS Blocks!</p>
    <p><Button>Normal button (click me!)</Button></p>

    <p><Button type="primary">Accent button</Button></p>
  </div>,
  document.getElementById('app')
);
