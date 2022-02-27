import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item, totalItem, totalAmount } = useContext(CartContext);

  if (item.length === 0) {
    return (
      <>
        <header>
          <div className="cart-icon">
            <img src="./images/cart.png" alt="cart" />
            <p>{totalItem}</p>
          </div>
        </header>
      </>
    );
  }

  return (
    <>
      <header>
        <h2>Your Cart</h2>
        <p></p>

        <div className="continue-shopping">
          <a href="./Home">continue shopping</a>
        </div>

        <div className="cart-icon">
          <img src="./images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <div className="cart-items">
          <div className="cart-items-container">
            {item.map((curItem) => {
              return <Items key={curItem.id} {...curItem} />;
            })}
          </div>
        </div>
        <div className="card-total">
          <h4>
            Subtotal :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span>${totalAmount}</span>
          </h4>
          <h4>
            Estimated Shipping cost: <span>$10</span>
          </h4>
          <h4 className="discount">
            Shipping Discount: <span>$10</span>
          </h4>
          <h4 className="discount">
            Order Discount: &nbsp;&nbsp;&nbsp;&nbsp; <span>$10</span>
          </h4>
          <h4>
            Estimated Total : <span>${totalAmount - 10}</span>
          </h4>
          <button>Checkout</button>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
