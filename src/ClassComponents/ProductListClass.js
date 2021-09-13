import React, {Component} from 'react';

class ProductListClass extends Component {
    constructor(props) {
        super(props);
        this.state = {products: [{id:11, title: 'Rich kids'}, {id:34, title: 'FreeLancer'}, {id: 68, title: 'Home or House'}]};
    }
    Remove = (id) => {
        const temp = this.state.products.filter(q => q.id !== id);
        this.setState({products: [...temp]});
    }
    render() {
        return (
            <div className="contianer">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <table className="table table-striped table-bordered">
                            <thead>
                            <tr>
                                <th>index</th>
                                <th>id</th>
                                <th>title</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.products.map((product, index) =>
                                <tr key={product.id}>
                                    <td>{index}</td>
                                    <td>{product.id}</td>
                                    <td>{product.title}</td>
                                    <th>
                                        <button className="btn btn-danger" onClick={()=> this.Remove(product.id)}>Remoove</button>
                                    </th>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductListClass;
