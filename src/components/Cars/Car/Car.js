import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Car.css';
import withClass from '../../../hoc/WithClass';
import ReactAux from '../../../hoc/ReactAux';
import { AuthContext } from '../../../containers/App';

class Car extends Component {
  constructor(props) {
    super(props);
    console.log('[Car.js] Inside Constructor', props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('[Car.js] Inside conponentWillMount()');
  }

  componentDidMount() {
    console.log('[Car.js] Inside componentDidMount()');
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    console.log('[Car.js] Inside render()');
    return (
      <ReactAux>
        <AuthContext.Consumer>
          {auth => auth ? <p>im authenticated!</p> : null}
        </AuthContext.Consumer>
        <p onClick={this.props.click}>this car is {this.props.name} and been released in year {this.props.yearReleased}</p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type='text'
          onChange={this.props.changed}
          value={this.props.name} />
      </ReactAux>
    )
    /* return [
      <p key="1" onClick={this.props.click}>this car is {this.props.name} and been released in year {this.props.yearReleased}</p>,
      <p key="2">{this.props.children}</p>,
      <input key="3" type='text' onChange={this.props.changed} value={this.props.name} />
    ] */
  }

};

Car.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  yearReleased: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Car, classes.Car);
