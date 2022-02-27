import React, { useContext } from "react";
import Items from "./Items";
import { CartContext } from "./Cart";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useNavigate } from "react-router-dom";


const ContextCart = () => {
  const { item, totalItem, totalAmount } = useContext(CartContext);
const navTo = useNavigate();
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
              <p className="totalBill" >TotalBill:-${totalAmount}</p>
              <button onClick={()=>{
                navTo("/products/checkout")
              }}  className="check-out">CheckOut</button>
      <section className="main-cart-section">
        <div className="cart-items">

          <div className="cart-items-container">
            <Scrollbars>
            {item.map((curItem) => {
              return <Items key={curItem.id} {...curItem} />;
            })}
            </Scrollbars>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
