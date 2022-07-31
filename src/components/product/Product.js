import React, {Component} from "react";

class Product extends Component {

    render() {
        console.log(this.props);
        const { product, addProduct, removeProduct } = this.props;
        const { productName, productNumber } = product;
        return (
            <div>
                <div>Product Name: {productName}</div>
                <div>Product Number: {productNumber}</div>
                <div>
                    <button onClick={addProduct}>Add Product</button>
                    <button onClick={removeProduct}>Remove Product</button>
                </div>
            </div>
        );
    }
}

export default Product;