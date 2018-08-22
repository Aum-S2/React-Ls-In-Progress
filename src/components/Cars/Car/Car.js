import React, { Component } from 'react';
import classes from './Car.css';


class Car extends Component {
  constructor(props) {
    super(props);
    console.log('[Car.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Car.js] Inside conponentWillMount()');
  }

  componentDidMount() {
    console.log('[Car.js] Inside componentDidMount()');
  }

  render() {
    console.log('[Car.js] Inside render()');
    /* return (
      <div className={classes.Car}>
        <p onClick={this.props.click}>this car is {this.props.name} and been released in year {this.props.yearReleased}</p>
        <p>{this.props.children}</p>
        <input type='text' onChange={this.props.changed} value={this.props.name} />
      </div>
    ) */
    return [
      <p onClick={this.props.click}>this car is {this.props.name} and been released in year {this.props.yearReleased}</p>,
      <p>{this.props.children}</p>,
      <input type='text' onChange={this.props.changed} value={this.props.name} />
    ]
  }

};

export default Car;
