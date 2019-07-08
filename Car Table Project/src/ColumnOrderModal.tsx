import React from 'react';
import './ColumnOrderModal.css';
import ColumnOrderSelects from './ColumnOrderSelects';

export default class ColumnOrderModal extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            currentOrder: this.props.currentOrder
        }
    }

    componentWillMount() {
        this.setState({
            currentOrder: this.props.currentOrder
        }, () => {console.log("ColumnOrderModal componentWillMount.... "); console.log(this.state.currentOrder)});
    }

    render() {
        if (this.props.show === true) {
            return(
                <div className="order-Modal">
                    <div className="modal-Content">
                        <h1>Change Column Order</h1>
                        <form>
                            <div className="form-group">
                                Some sample text.
                                <table >
                                    <tbody>
                                        <tr>
                                            <td>
                                                Column 1:
                                            </td>  
                                            <td>  
                                                <ColumnOrderSelects options={this.props.options} currentSelected={this.props.currentOrder[0]} onChange={this.handleChangeC1}></ColumnOrderSelects>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Column 2:
                                            </td>  
                                            <td>
                                                <ColumnOrderSelects options={this.props.options} currentSelected={this.props.currentOrder[1]} onChange={this.handleChangeC2}></ColumnOrderSelects>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Column 3:
                                            </td>  
                                            <td>
                                                <ColumnOrderSelects options={this.props.options} currentSelected={this.props.currentOrder[2]} onChange={this.handleChangeC3}></ColumnOrderSelects>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <label onClick={this.handleSubmit} className="btn btn-primary custom">Submit Changes</label>
                            <span className="separator"/>
                            <label onClick={this.handleClose} className="btn btn-success">Close</label>                  
                        </form>
                    </div>
                </div>
            );
        }
        else {
            return (<div></div>);
        }
    }

    handleChangeC1 = (column: string) => {
        console.log("handleChangeC1 here")
        var order: string [] = [];

        for (let i = 0; i < this.state.currentOrder.length; i++) {
            order.push(this.state.currentOrder[i]);
        }

        order[0] = column;

        console.log("order");
        console.log(order);
        order[0] = column;

        this.setState({
            currentOrder: order
        }, () => {console.log("hc1, inside setState"); console.log(this.state.currentOrder)});
    }

    handleChangeC2 = (column: string) => {
        var order: string [] = [];

        for (let i = 0; i < this.state.currentOrder.length; i++) {
            order.push(this.state.currentOrder[i]);
        }

        order[1] = column;

        this.setState({
            currentOrder: order
        }, () => {console.log(this.state.currentOrder)});
    }

    handleChangeC3 = (column: string) => {
        var order: string [] = [];

        for (let i = 0; i < this.state.currentOrder.length; i++) {
            order.push(this.state.currentOrder[i]);
        }

        order[2] = column;

        this.setState({
            currentOrder: order
        }, () => {console.log(this.state.currentOrder)});
    }

    handleSubmit = () => {
        var duplicateFound = false;

        for(var i = 0; i <= this.state.currentOrder.length; i++) {
            for(var j = i; j <= this.state.currentOrder.length; j++) {
                if(i !== j && this.state.currentOrder[i] === this.state.currentOrder[j]) {
                    duplicateFound = true;
                }
            }
        }

        if (duplicateFound)
            console.log("Cannot submit form... duplicates were found!");
        else
            this.props.onSubmit(this.state.currentOrder);
    }

    handleClose = () => {
        this.props.onClose();
    }
}