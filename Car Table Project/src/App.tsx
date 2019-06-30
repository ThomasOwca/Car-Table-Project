import React from 'react';
import './App.css';
import { Car } from './Models/Car';
import CarTable from './CarTable';
import * as Bootstrap from 'react-bootstrap';

class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    
    this.state = {
      cars: [],
      ordering: []
    }

    this.changeColumnOrder = this.changeColumnOrder.bind(this);
  }

  componentDidMount() {
    let order = [
      ["Model", "Make", "Year"], ["Model", "Year", "Make"], 
      ["Make", "Model", "Year"], ["Make", "Year", "Model"], 
      ["Year", "Model", "Make"], ["Year", "Make", "Model"]
    ];

    var models: string[] = ["Accord", "Civic", "Pathfinder"];
    var make: string = "Honda";
    var years: number[] = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019];

    var cars: Car[] = [];

    for (let i = 0; i < 40; i++) {
      var randYear = Math.floor(Math.random() * 10); // 0 - 9
      var randModel = Math.floor(Math.random() * 3); // 0 - 2
      cars.push(new Car(models[randModel], make, years[randYear]));
    }

    this.setState({
      cars: cars,
      ordering: order[2]
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Car Table Project</h1>
          <Bootstrap.Button onClick={this.changeColumnOrder} className="columnButton btn-danger">Change Ordering</Bootstrap.Button>
          <CarTable cars={this.state.cars} order={this.state.ordering}></CarTable>
        </header>
      </div>
    );
  }

  // Method for changing the column order of the contents in the car table. 
  changeColumnOrder() {

    let order = [
      ["Model", "Make", "Year"], ["Model", "Year", "Make"], 
      ["Make", "Model", "Year"], ["Make", "Year", "Model"], 
      ["Year", "Model", "Make"], ["Year", "Make", "Model"]
    ];

    let random = Math.floor(Math.random() * 5); // 0 - 5

    console.log("Testing random order");
    console.log(order[random]);

    this.setState({
      ordering: order[random]
    });

    console.log("Testing after set state.");
    console.log(order[random]);
  }
}

export default App;
