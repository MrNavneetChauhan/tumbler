import React from "react";
import { useNavigate } from "react-router-dom";
import "./checkout.css";

const Checkout = () => {
  const navTo = useNavigate();
  return (
    <div className="checkout-page-div">
      <div className="main-div-checkout">
        <h1>Checkout</h1>
        <div className="left-side-div">
          <div className="left-side-div-1">
            <h4>Shipping</h4>

            <div className="div-firstand-lastname-maindiv">
              <div className="div-firstand-lastname">
                <label htmlFor="">
                  {" "}
                  First Name
                  <input type="text" placeholder=" " />
                </label>
              </div>
              <div className="div-firstand-lastname">
                <label htmlFor=""> Last Name</label>
                <input type="text" placeholder=" " />
              </div>
            </div>
            <div className="addresdiv">
              <label htmlFor=""> Address 1</label>
              <input type="text" placeholder=" " />
              <label htmlFor=""> Address 2</label>
              <input type="text" placeholder=" " />
              <label htmlFor=""> City</label>
              <input type="text" placeholder=" " />
            </div>
            <div className="city-state-div">
              <div className="state-div">
                <label htmlFor=""> State</label>
                <select value="">
                  <option value="A">Alabama</option>
                  <option value="B">Arizona</option>
                  <option value="C">California</option>
                  <option value="B">Florida</option>
                  <option value="C">California</option>
                  <option value="B">Arizona</option>
                  <option value="C">Delaware</option>
                  <option value="B">Arizona</option>
                  <option value="C">Idaho</option>
                </select>
              </div>
              <div className="zipcode-div">
                <label htmlFor=""> Zip Code</label>
                <input type="number" placeholder=" " />
              </div>
            </div>
            <div className="addresdiv">
              <label htmlFor=""> Phone Number</label>
              <input type="number" placeholder=" " />
            </div>
            <div className="shipping-method">
              <h4>Shipping Method</h4>
              <div className="shipping-method-div">
                <input type="radio" name="Estimate" id="Estimate" />
                <label htmlFor="Estimate">
                  Economy
                  <br />
                  (estimated arrival: 03/03-/22{" "}
                </label>
              </div>
              <div className="shipping-method-div">
                <input type="radio" name="Estimate" id="Estimate" />
                <label htmlFor="Estimate">
                  Fedex Ground
                  <br />
                  (estimated arrival: 01/03-/22{" "}
                </label>
              </div>
              <div className="shipping-method-div">
                <input type="radio" name="Estimate" id="Estimate" />
                <label htmlFor="Estimate">
                  2nd Day Air
                  <br />
                  (estimated arrival: 03/03-/22{" "}
                </label>
              </div>
              <div className="nextpayment-div">
                <button onClick={()=>{
                  navTo("/products/payment")
                }} >Next: Payment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
