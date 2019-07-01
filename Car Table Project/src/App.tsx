import React from 'react';
import './App.css';
import { Car } from './Models/Domain Models/Car';
import CarTable from './CarTable';
import * as Bootstrap from 'react-bootstrap';
import axios from 'axios';
import DataOrdering from './Services/DataOrdering';
import { CarViewModel } from './Models/ViewModels/CarViewModel';
import { DealershipViewModel } from './Models/ViewModels/DealershipViewModel';

class App extends React.Component<any, any> {
  private _dataOrderService: DataOrdering;
  private originalCars: Car [];

  constructor(props: any) {
    super(props);

    this._dataOrderService = new DataOrdering();
    this.originalCars = [];
    
    this.state = {
      cars: [],
      originalCars: [],
      ordering: [],
      dealershipInfo: []
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
    }, () => {
      this.originalCars = this.state.cars;
    });

    var dealerships: DealershipViewModel[] = [];

    // Making a localhost call to a local Web API to test functionality
    // of the axios library for Web API calls in React.
    axios.get(`https://localhost:5001/api/dealerships`)
      .then((response) => {
        response.data.map((item: any, key: any) => {

          var stock : CarViewModel[] = [];
          item.stock.map((car: any, key: any) => {
            return (stock.push(new CarViewModel(car.model, car.make, car.year, car.price)));
          });
          return (dealerships.push(new DealershipViewModel(item.id, item.address, item.city, item.zipCode, item.phoneNumber, stock)));
        })
      });

    console.log("Checking dealerships: DealershipViewModel []");
    console.log(dealerships);
    
    this.setState({dealershipInfo: dealerships})
    console.log("ComponentDidMount() was called.");
  }

  // Event handler for clicking on a table column header.
  // Orders records by that particular column.
  orderByHeader(e: any) {
    var clickedHeader = e.target.textContent;

    if (clickedHeader === "Make") {
      this.setState({cars: this._dataOrderService.orderByMake(this.originalCars)});
    }
    else if (clickedHeader === "Model") {
      this.setState({cars: this._dataOrderService.orderByModel(this.originalCars)});
    }
    else if (clickedHeader === "Year") {
      this.setState({cars: this._dataOrderService.orderByYear(this.originalCars)});
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Car Table Project</h1>
          <Bootstrap.Button onClick={this.changeColumnOrder} className="columnButton btn-danger">Change Ordering</Bootstrap.Button>
          <CarTable cars={this.state.cars} order={this.state.ordering} onClick={(e: any) => this.orderByHeader(e)}></CarTable>
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
