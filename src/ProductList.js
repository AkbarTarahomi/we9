import React, {useState} from 'react'
import ProductInfo from "./ProductInfo";

export const ProductList = () => {
    const initialProduct = [{id:11, title: 'Rich kids'}, {id:34, title: 'FreeLancer'}, {id: 68, title: 'Home or House'}]
    const [products, setProducts] = useState([...initialProduct]);
    const Remove = (id) => {
        const temp = products.filter(q => q.id !== id);
        setProducts([...temp]);
    }

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
                        {products.map((product, index) =>
                            <tr key={product.id}>
                                <td>{index}</td>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <th>
                                    <button className="btn btn-danger" onClick={()=> Remove(product.id)}>Remoove</button>
                                </th>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                {products.map((product) => <ProductInfo key={product.id} info={product} />)}
            </div>
        </div>
    )
}

