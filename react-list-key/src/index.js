import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function NumberList(props) {
  const numbers = props.numbers;
  const doubled = numbers.map((number) => number * 2);
  const listItems = doubled.map((doubled) =>
    <li key={doubled.toString()}>
      {doubled}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render( <NumberList numbers={numbers} />);

