import React from 'react';

const ProductInfo = ({info}) => {
    return (
        <div className="col-4">
            <div className="card bg-primary">
                <h4>{info.id}</h4>
                <h5>{info.title}</h5>
            </div>
        </div>
    );
};

export default ProductInfo;