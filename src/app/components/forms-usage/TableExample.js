import React, {Component} from 'react';
import CustomBootstrapTable from '../forms/CustomBootstrapTable';
import CustomBootstrapModal from '../forms/CustomBootstrapModal';


class TableExample extends Component {

    constructor(props){
        super(props);

        this.state = {
            lastSelectedId : '',
            data: [{
                id: 1,
                name: "Product1",
                price: 120
            }, {
                id: 2,
                name: "Product2",
                price: 80
            }],
            headers: [
                {   isKey: true,
                    name: 'id',
                    value: 'Product ID'
                },
                {   isKey: false,
                    name: 'name',
                    value: 'Product Name'
                },
                {   isKey: false,
                    name: 'price',
                    value: 'Product Price'
                }
                ]
        }
    }

    onSelectRow = (id) => {
        this.setState({lastSelectedId : id})
    };

    showTableInModalBox = () => {
        this.setState({modalShow : true})
    };
    closeModal = () => {
        this.setState({modalShow : false})
    };
    render() {
        const   header = <div>Таблица</div>,
            footer = <div><button onClick={this.closeModal}>Close</button></div>
        return (
            <div>

                <CustomBootstrapModal
                    header={header}
                    body={<CustomBootstrapTable
                        data={this.state.data}
                        headers={this.state.headers}
                        onSelect={this.onSelectRow}
                    />}
                    footer={footer}
                    show={this.state.modalShow}
                />
                <div>last selected id is: {this.state.lastSelectedId}</div>
                <CustomBootstrapTable
                    data={this.state.data}
                    headers={this.state.headers}
                    onSelect={this.onSelectRow}
                />
                <button className='btn btn-primary' onClick={this.showTableInModalBox}>
                    Show in modal box
                </button>
            </div>
        )
    }
}

export default TableExample;