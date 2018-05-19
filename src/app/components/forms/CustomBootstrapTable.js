import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import '../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'

class CustomBootstrapTable extends Component {

    trStyle = (row, rowIndex) => {
        return { backgroundColor: '#FFFAFA' };
    }
    render() {
        const selectRow = {
            mode: 'checkbox',
            bgColor: 'red',
            onSelect: (e) => {this.props.onSelect(e.id)}
        };
        return (
            <div>
                <BootstrapTable data={this.props.data} trStyle={ this.trStyle } selectRow={ selectRow }>
                    {
                        this.props.headers.map((e, i) =>
                                <TableHeaderColumn key={i}
                                                   isKey={e.isKey}
                                                   dataField={e.name}
                                >
                                {e.value}
                                </TableHeaderColumn>
                        )
                    }
                </BootstrapTable>
            </div>
        );
    }
}

export default CustomBootstrapTable;