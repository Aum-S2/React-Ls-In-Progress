import React, { Component } from 'react';
import classes from './Car.css';
import withClass from '../../../hoc/withClass';
import ReactAux from '../../../hoc/ReactAux';


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
    return (
      <ReactAux>
        <p onClick={this.props.click}>this car is {this.props.name} and been released in year {this.props.yearReleased}</p>
        <p>{this.props.children}</p>
        <input type='text' onChange={this.props.changed} value={this.props.name} />
      </ReactAux>
    )
    /* return [
      <p key="1" onClick={this.props.click}>this car is {this.props.name} and been released in year {this.props.yearReleased}</p>,
      <p key="2">{this.props.children}</p>,
      <input key="3" type='text' onChange={this.props.changed} value={this.props.name} />
    ] */
  }

};

export default withClass(Car, classes.Car);
