import React from 'react';
import './App.css';
import './CarModal.css';
import { Car } from './Models/Domain Models/Car';

export default class CarModal extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            make: null,
            model: null,
            year: null
        }
    }

    render() {
        console.log("CarModal here");
        console.log(this.props.show);
        if (this.props.show === true) {
            return(
                <div className="car-Modal">
                    <div className="modal-Content">
                        <h1>Add Inventory</h1>
                        <form>
                            <div className="form-group">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Car Make:</td>
                                            <td>
                                                <input type="text" className="form-control" name="inputCarMake" onChange={this.handleChangeCarMake.bind(this)}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Car Model:</td>
                                            <td>
                                                <input type="text" className="form-control" name="inputCarModel" onChange={this.handleChangeCarModel.bind(this)}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Car Year:</td>
                                            <td>
                                                <input type="text" className="form-control" name="inputCarYear" onChange={this.handleChangeCarYear.bind(this)}/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button onClick={this.handleSubmit} className="btn btn-danger">Add Car</button>
                            <span className="separator"/>
                            <button onClick={this.props.onClose} className="btn btn-success">Close</button>                  
                        </form>
                    </div>
                </div>
            );
        }
        else {
            return (<div></div>);
        }
    }

    handleSubmit(e: any) {
        console.log("handleSubmit()");
        console.log(new Car(this.state.model, this.state.make, this.state.year));
        this.props.onAddCar(this.state.make, this.state.model, this.state.year);
    }

    handleChangeCarMake(e: any) {
        this.setState({
            make: e.target.value
        }, () => {
            console.log(this.state.make);
        });
    }

    handleChangeCarModel(e: any) {
        this.setState({
            model: e.target.value
        });
    }

    handleChangeCarYear(e: any) {
        this.setState({
            year: e.target.value
        });
    }
}