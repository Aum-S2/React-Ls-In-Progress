import React from 'react';
import classes from './Cockpit.css';
import ReactAux from '../../hoc/ReactAux';

const Cockpit = (props) => {
  const assignClasses = [];
  let btnClass = classes.Button;
  if (props.showCars) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }

  if (props.cars.length <= 2) {
    assignClasses.push(classes.red); // classes = ['red']
  }
  if (props.cars.length <= 1) {
    assignClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
      <ReactAux>
      <h1>{props.appTitle}</h1>
      <p className={assignClasses.join(' ')}>changing the size of text</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Switch</button>
      <button onClick={props.login}>Log In</button>
      </ReactAux>
  );
};

export default Cockpit;
