import React from 'react';
import classes from './Cockpit.css';


const Cockpit = (props) => {
  const assignClasses = [];
  let btnClass = '';
  if (props.showCars) {
    btnClass = classes.Red;
  }

  if (props.cars.length <= 2) {
    assignClasses.push(classes.red); // classes = ['red']
  }
  if (props.cars.length <= 1) {
    assignClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignClasses.join(' ')}>changing the size of text</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Switch</button>
    </div>
  )
};

export default Cockpit;
