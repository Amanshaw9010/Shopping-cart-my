import React, { useState } from 'react'

const Product = ({ Products, sortProduct, addToCart }) => {

    const [value, setValue] = useState('select');

    const setList = (e) => {
        setValue(e.target.value);
        sortProduct(e.target.value)

    }


    return (
        <div className="Products">
            <div className="products-nav">
                <h3>Products</h3>
                <div className="sort-list">
                    Sort by&nbsp;: &nbsp;
                    <select value={value} onChange={setList} >
                        <option value="Select">Select</option>
                        <option value="Lowest To Highest">Lowest To Highest</option>
                        <option value="Highest To Lowest">Highest To Lowest</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Product
