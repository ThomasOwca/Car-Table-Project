import React from 'react';
import './App.css';
import { Car } from './Models/Domain Models/Car';
import CarTable from './CarTable';
import axios from 'axios';
import DataOrdering from './Services/DataOrdering';
import { CarViewModel } from './Models/ViewModels/CarViewModel';
import { DealershipViewModel } from './Models/ViewModels/DealershipViewModel';
import CarModal from './CarModal';
import ColumnOrderModal from './ColumnOrderModal';

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
      ordering: ["Make", "Model", "Year"],
      originalOrdering: ["Make", "Model", "Year"],
      dealershipInfo: [],
      showAddCarModal: false,
      showColumnOrderModal: false
    }

    this.changeColumnOrder = this.changeColumnOrder.bind(this);
    this.closeColumnOrderModal = this.closeColumnOrderModal.bind(this);
  }

  componentDidMount() {
    let order = [
      ["Model", "Make", "Year"], ["Model", "Year", "Make"], 
      ["Make", "Model", "Year"], ["Make", "Year", "Model"], 
      ["Year", "Model", "Make"], ["Year", "Make", "Model"]
    ];

    var models: string[] = ["Accord", "Civic", "Pilot"];
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
      ordering: order[2],
      originalOrdering: order[2],
    }, () => {
      this.originalCars = this.state.cars;
    });

    var dealerships: DealershipViewModel[] = [];

    try {
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

    }
    catch (Exception) {
      console.log(Exception.toString());
    }
    
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
          <div className="row">
            <div className="col-6">
              <button onClick={() => this.setState({showAddCarModal: true})} className="btn btn-success custom">Add Car</button>
            </div>
            <div className="col-6">
              <button onClick={() => this.setState({showColumnOrderModal: true})} className="btn btn-danger custom">Change Ordering</button>
            </div>
          </div>
          <div className="space"/>
          <ColumnOrderModal options={this.state.originalOrdering} currentOrder={this.state.ordering} show={this.state.showColumnOrderModal} onClose={this.closeColumnOrderModal} onSubmit={(changedOrdering: string[]) => this.changeColumnOrder(changedOrdering)}>
          </ColumnOrderModal>
          <CarModal show={this.state.showAddCarModal} onClose={this.closeModal} onAddCar={(make: string, model: string, year: number) => this.addCar(make, model, year)}></CarModal>
          <CarTable cars={this.state.cars} order={this.state.ordering} onClick={(e: any) => this.orderByHeader(e)}></CarTable>
        </header>
      </div>
    );
  }

  closeColumnOrderModal() {
    this.setState({
      showColumnOrderModal: false
    });
  }

  // Method for changing the column order of the contents in the car table. 
  changeColumnOrder(changedOrdering: string[]) {
    this.setState({
      ordering: changedOrdering
    });
  }

  addCar = (make: string, model: string, year: number) => {


    if ((make !== null || make !== "") && (model !== null || make !== "") && (year !== null && year >= 1958)) {
      let cars = this.state.cars;

      try {
        cars.unshift(new Car(model, make, year));
      }
      catch (Exception) {}
      
      this.setState({
        cars: cars,
        showAddCarModal: false
      });
    }
  }

  openModal = () => {
    this.setState({showAddCarModal: true}, () => {
      console.log("addCar()");
      console.log(this.state.showAddCarModal);
    });
  }

  closeModal = () => {
    this.setState({showAddCarModal: false}, () => {
      console.log("closeModal()");
      console.log(this.state.showAddCarModal);
    });
  }
}

export default App;
