import React from 'react';
export function Title() {
  console.log('Title Comp');
  return <h1>title comp</h1>;
}

export function Conuter(props) {
  console.log('Counter Comp :', props.counter);
  return <h2>counter {props.counter}</h2>;
}

export function Button(props) {
  console.log('Button Comp :', props.children);
  return <button onClick={props?.onIncrement}>{props.children}</button>;
}
