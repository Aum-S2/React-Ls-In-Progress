import React, { PureComponent } from 'react';
import Car from './Car/Car';

class Cars extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[Cars.js] Inside Constructor', props);
    this.lastCarRef = React.createRef();
  }

  componentWillMount() {
    console.log('[Cars.js] Inside conponentWillMount()');
  }

  componentDidMount() {
    console.log('[Cars.js] Inside componentDidMount()');
    this.lastCarRef.current.focus();
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATED Cars.js] Inside componentWillReceiveProps', nextProps);
  }

  /*  shouldComponentUpdate(nextProps, nextState) {
      console.log('[UPDATE Cars.js] Inside shouldComponentUpdate', nextProps, nextState);
      return nextProps.cars !== this.props.cars || nextProps.changed !== this.props.changed || 
      nextProps.clicked !== this.props.clicked;
      //return true;
    } */

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Cars.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('[UPDATE Cars.js] Inside componentDidUpdate', nextProps, nextState);
  }


  render() {
    console.log('[Cars.js] Inside render()');
    return this.props.cars.map((car, index) => {
      return <Car
        click={() => this.props.clicked(index)}
        name={car.name}
        position={index}
        yearReleased={car.yearReleased}
        ref={this.lastCarRef}
        key={car.id}
        changed={(event) => this.props.changed(event, car.id)} />
    });
  }
}

export default Cars;