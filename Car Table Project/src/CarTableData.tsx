import React from 'react';

export default class CarTableData extends React.Component<any, any> {
    render() {

        if (this.props.column === "Make") {
            return(<td>{this.props.car.Make}</td>);
        }
        else if (this.props.column === "Model") {
            return(<td>{this.props.car.Model}</td>);
        }
        else if (this.props.column === "Year") {
            return(<td>{this.props.car.Year}</td>);
        }
        else{
            return (<td>Unknow</td>);
        }
    }
}