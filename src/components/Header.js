import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        
        {/* <a href="#/"> */}
          <center><h1><center>ANJALI SHOPPING CART</center></h1></center>
        {/* </a> */}
       
      </div>
      <div>
        <a href="#/cart">
          CART{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        {/* <a href="#/signin"> SignIn</a> */}
      </div>
    </header>
  );
}