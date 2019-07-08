import React from 'react';
import './ColumnOrderModal.css';
import ColumnOrderSelects from './ColumnOrderSelects';

export default class ColumnOrderModal extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            currentOrder: []
        }
    }

    componentWillMount() {
        this.setState({
            currentOrder: this.props.currentOrder
        });
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
                                                <ColumnOrderSelects options={this.props.options} currentSelected={this.props.currentOrder[0]} onChange={this.handleChangeC1} index={0}></ColumnOrderSelects>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Column 2:
                                            </td>  
                                            <td>
                                                <ColumnOrderSelects options={this.props.options} currentSelected={this.props.currentOrder[1]} onChange={this.handleChangeC2} index={1}></ColumnOrderSelects>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Column 3:
                                            </td>  
                                            <td>
                                                <ColumnOrderSelects options={this.props.options} currentSelected={this.props.currentOrder[2]} onChange={this.handleChangeC3} index={2}></ColumnOrderSelects>
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
        let order = this.state.currentOrder;
        order[0] = column;

        this.setState({
            currentOrder: order
        }, () => {console.log(this.state.currentOrder)});
    }

    handleChangeC2 = (column: string) => {
        let order = this.state.currentOrder;
        order[1] = column;

        this.setState({
            currentOrder: order
        }, () => {console.log(this.state.currentOrder)});
    }

    handleChangeC3 = (column: string) => {
        let order = this.state.currentOrder;
        order[2] = column;

        this.setState({
            currentOrder: order
        }, () => {console.log(this.state.currentOrder)});
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state.currentOrder);
    }

    handleClose = () => {
        this.props.onClose();
    }
}