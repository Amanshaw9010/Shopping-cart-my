import React, { useEffect, useState } from 'react'

import Products from './component/Product';

const App = () => {

  const [selectedSize, setSelectedSize] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);


  return (
    <div className="main">
      <h1>hello</h1>

      {/* <Sizes selectedSizes={selectedSizes}/> */}
      <Products products={products}/>
      {/* <Cart products={cart}/> */}
    </div>
  )
}

export default App