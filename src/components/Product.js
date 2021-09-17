import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
//   const numInRow = 3;
  return (
    <div class="responsive">
        {/* <div class="card"> */}
        {/* <div className="container">
           <div class="d-flex justify-content-center">  */}
      <img className="small" src={product.image} alt={product.name} />
      <center><h3>{product.name}</h3>
      <div>Rs.{product.price}</div></center>
      <br/>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
      <br />
      <br />
      <br />

      {/* </div>
      </div> */}
      {/* </div> */}
    </div>
  );
}