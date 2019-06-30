import React from 'react';
import './App.css';
import './CarTable.css';

export default class CarTable extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {

        this.setState({
            order: this.props.order,
            cars: this.props.cars

        });
        
        console.log("order");
        console.log(this.props.order);
    }


    render() {
        return(
            <div className="col-8">
                <table className="table custom">
                    <thead>
                        <tr>
                        {this.props.order.map((column: string, key: any) => {
                            return(<th key={key} onClick={e => this.orderByHeader(e)}>{column}</th>);
                            
                        })}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cars.map((car: any, key: any) =>
                            <tr key={key}>
                                {this.props.order.map((column: any, key: any) =>
                                    <td key={column}>
                                        {car[column]}
                                    </td>
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }

    orderByHeader = (e: any) => {
        var clicked = e.target.textContent;
        console.log("Inside orderByHeader function");
        console.log(clicked);
    }
}