import React from "react";

function Basket(props) {
  const { cardItems, onAdd, onRemove } = props;
  const itemPrice = cardItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemPrice * 0.14;
  const shippingPrice = itemPrice > 2000 ? 0 : 50;
  const totalPrice = itemPrice + taxPrice + shippingPrice;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>{cardItems.length === 0 && <div>Cart is Empty</div>}</div>
      {cardItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.name}</div>
          <div className="col-2">
            <button className="add" onClick={() => onAdd(item)}>
              +
            </button>
            <button className="remove" onClick={() => onRemove(item)}>
              -
            </button>
          </div>
          <div className="col-2 text-right">
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cardItems.length !== 0 && (
        <>
          <hr />
          <div clasName="row">
            <div className="col-2">Items Price</div>
            <div className="col-1 text-right">${itemPrice.toFixed(2)}</div>
          </div>

          <div clasName="row">
            <div className="col-2">Tax Price</div>
            <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
          </div>

          <div clasName="row">
            <div className="col-2">Shipping Price</div>
            <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
          </div>

          <div clasName="row">
            <div className="col-2">Total Price</div>
            <div className="col-1 text-right">${totalPrice.toFixed(2)}</div>
          </div>
        </>
      )}
    </aside>
  );
}

export default Basket;
