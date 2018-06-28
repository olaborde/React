import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (
  <ul>
    <li>
      Red
    </li>
     <li>
      Blue
    </li>
     <li>
      Green
    </li>
  </ul>
)

ReactDOM.render(
  myList,
  document.getElementById('app')
);