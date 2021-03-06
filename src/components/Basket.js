import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <center><h1>CART ITEMS</h1></center>
      <br/>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div><br/>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>
            <br/>
            <div className="col-2 text-right">
              {item.qty} x Rs.{item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">Rs.{itemsPrice.toFixed(2)}</div>
            </div>
            <br/>
            
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">Rs.{taxPrice.toFixed(2)}</div>
            </div>
            <br/>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                Rs.{shippingPrice.toFixed(2)}
              </div>
            </div>
            <br/>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>Rs.{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <br/>
            <hr />
            <div className="row">
              <button onClick={() => alert('Thankyou for shopping with us!!See you again')}>
                Checkout
              </button>
            </div>
            <br/>
          </>
        )}
      </div>
    </aside>
  );
}