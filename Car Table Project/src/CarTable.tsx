import React from 'react';
import latinize from 'latinize';
import './App.css';
import './CarTable.css';
import Highlighter from "react-highlight-words";

export default class CarTable extends React.Component<any, any> {
    render() {
        return(
            <div className="col-8">
                
                <table className="table custom table-bordered table-hover" id="table-to-xls">
                    <thead>
                        <tr>
                        {this.props.order.map((column: string, key: any) => {
                            return(<th key={key} onClick={this.props.onClick}>{column}</th>);
                        })}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cars.map((car: any, key: any) =>
                            <tr key={key}>
                                {this.props.order.map((column: any, key: any) =>
                                    <td key={column}>
                                        <Highlighter
                                            activeClassName="active"
                                            caseSensitive={false}
                                            highlightClassName="highlight"
                                            highlightStyle={{ fontWeight: 'normal' }}
                                            sanitize={latinize}
                                            searchWords={[this.props.searchTerm]}
                                            textToHighlight={car[column].toString()}
                                        />
                                    </td>
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}