import React from 'react';


export default class ColumnOrderSelects extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            currentSelected: this.props.currentSelected
        }
    }

    render() {
        return (
            <select className="form-control" value={this.state.currentSelected} onChange={(e: any) => this.handleChange(e)}>
                {this.props.options.map((item:any, key: any) => {
                    return (<option key={key}>{item}</option>)
                })};
            </select>
        );
    }

    handleChange(e: any) {
        try {
            this.setState({
                currentSelected: e.target.value
            }, () => {this.props.onChange(this.state.currentSelected)});
        }
        catch (Exception) {}
    }
}