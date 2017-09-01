import React from 'react';
import PropTypes from 'prop-types';
import keyMirror from 'key-mirror';
import { createStore, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';

import { BaseForm } from './base-form';
import { initialCarData } from './initial-data';


const actionTypes = keyMirror({
  ADD_CAR: null,
});

const addCarActionCreator = car => ({
  type: actionTypes.ADD_CAR,
  car,
});

const reducer = (state= { cars: initialCarData }, action) => {

  switch (action.type) {
    case actionTypes.ADD_CAR:
      return { ...state, cars: [ ...state.cars, {
        id: Math.max( ...state.cars.map(c => c.id) ) + 1,
        ...action.car 
      } ] };
    default:
      return state;
  }

};

const store = createStore(reducer);

const mapStateToProps = ({ cars }) => ({
  cars,
  inventoryTotal: cars.reduce( (acc, cur) => acc + cur.price, 0 ),
});

const mapDispatchToProps = dispatch => bindActionCreators({ addCar: addCarActionCreator }, dispatch);

class CarTool extends BaseForm {

  static propTypes = {
    cars: PropTypes.array,
    inventoryTotal: PropTypes.number,
  };

  constructor(props) {
    super(props);

    this.state = this.initState();
  }

  initState = () => ({
    make: '',
    model: '',
    year: 1900,
    color: '',
    price: 0,
  });

  saveCar = () => {
    this.props.addCar({ ...this.state });
    this.setState(this.initState());
  }

  render() {
    return <div>
      <header>
        <h1>Redux Car Tool</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cars.map(car => <tr key={car.id}>
            <td>{car.make}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{car.color}</td>
            <td>{car.price}</td>
          </tr>)}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" style={{textAlign:'right'}}>Total:</td>
            <td>{this.props.inventoryTotal}</td>
          </tr>
        </tfoot>
      </table>
      <form>
        <div>
          <label htmlFor="make-input">Make:</label>
          <input type="text" id="make-input" name="make"
            value={this.state.make} onChange={this.onChange} />
        </div>
        <div>
          <label htmlFor="model-input">Model:</label>
          <input type="text" id="model-input" name="model"
            value={this.state.model} onChange={this.onChange} />
        </div>
        <div>
          <label htmlFor="year-input">Year:</label>
          <input type="number" id="year-input" name="year"
            value={this.state.year} onChange={this.onChange} />
        </div>
        <div>
          <label htmlFor="color-input">Color:</label>
          <input type="text" id="color-input" name="color"
            value={this.state.color} onChange={this.onChange} />
        </div>
        <div>
          <label htmlFor="price-input">Price:</label>
          <input type="number" id="price-input" name="price"
            value={this.state.price} onChange={this.onChange} />
        </div>
        <button type="button" onClick={this.saveCar}>Save Car</button>
      </form>
    </div>;
  }
}

const CarToolContainer = connect(mapStateToProps, mapDispatchToProps)(CarTool);

export const ReduxCarTool = () => <Provider store={store}>
  <CarToolContainer />
</Provider>;
