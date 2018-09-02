import React, { PureComponent } from 'react';
import classes from './App.css';
import Cars from '../components/Cars/Cars';
import Cockpit from '../components/Cockpit/Cockpit';
import ReactAux from '../hoc/ReactAux';
import withClass from '../hoc/WithClass';


class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] Inside conponentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  /* shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
    return nextState.cars !== this.state.cars ||
    nextState.showCars !== this.state.showCars;
  } */

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Ca App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Ca App.js] Inside componentDidUpdate');
  }

  state = {
    cars: [
      { id: 'yaids01', name: 'yaris', yearReleased: 2001 },
      { id: 'yaids02', name: 'civic', yearReleased: 2006 },
      { id: 'yaids03', name: 'GTR', yearReleased: 1999 }
    ],
    showCars: false,
    toggleClicked: 0
  }


  nameChangedHandler = (event, id) => {
    const carIndex = this.state.cars.findIndex(c => {
      return c.id === id;
    });

    const car = {
      ...this.state.cars[carIndex]
    };

    //const car = Object.assign({}, this.state.cars[carIndex]);

    car.name = event.target.value;

    const cars = [...this.state.cars];
    cars[carIndex] = car;

    this.setState({ cars: cars });
  }

  deleteCarHandler = (carIndex) => {
    //const cars = this.state.cars.slice();
    const cars = [...this.state.cars];
    cars.splice(carIndex, 1);
    this.setState({ cars: cars });
  }

  toggleCarsHandler = () => {
    const doesShow = this.state.showCars;
    this.setState( (prevState, props) =>{ 
      return{showCars: !doesShow, 
        toggleClicked: prevState.toggleClicked + 1 }
    });
  }


  render() {
    console.log('[App.js] Inside Render');
    let cars = null;

    if (this.state.showCars) {
      cars = <Cars
        cars={this.state.cars}
        clicked={this.deleteCarHandler}
        changed={this.nameChangedHandler} />;
    }

    return (
      <ReactAux>
        <button onClick={() => { this.setState({ showCars: true }) }}>Show Cars</button>
        <Cockpit
          appTitle={this.props.title}
          showCars={this.state.showCars}
          cars={this.state.cars}
          clicked={this.toggleCarsHandler} />
        {cars}
      </ReactAux>
    );
  }
}

export default withClass(App, classes.App);
