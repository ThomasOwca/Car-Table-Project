import React from 'react';


export default class ColumnOrderSelects extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        console.log("Selects constructor");
        console.log(this.props.currentSelected);

        this.state = {
            currentSelected: this.props.currentSelected
        }
    }

    render() {
        return (
            <select className="form-control" value={this.state.currentSelected} onChange={(e: any) => this.handleChange(e)}>
                <option></option>
                {this.props.options.map((item:any, key: any) => {
                    return (<option key={key}>{item}</option>)
                })};
            </select>
        );
    }

    handleChange(e: any) {
        this.setState({
            currentSelected: e.target.value
        });

        this.props.onChange(e.target.value);
    }
}