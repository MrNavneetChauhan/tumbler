import React from "react";
import { useNavigate } from "react-router-dom";
import "./checkout.css";

const Payment = () => {
  const navTo = useNavigate();
  return (
    <div className="checkout-page-div">
      <div className="main-div-checkout">
        <h1>Checkout</h1>
        <div className="signin-div">
          <h4>Shipping</h4>
          <h4>Shipping Address:</h4>
          <p>
            Arnold Clark
            <br />
            123 Main St.
            <br />
            Anytown, USA
            <br />
            12345
            <br />
            9745210353
          </p>

          <p>
            Shipping Method: <br /> Economy (Estimated )
          </p>
        </div>
        <div className="payments-div">
          <h4>Payment</h4>
          <div className="shipping-method-div">
            <input type="radio" name="Estimate" id="Estimate" />
            <label htmlFor="Estimate">Credit or Debit Card</label>
          </div>
          <div className="cardno">
            <label htmlFor="">Card Number</label>
            <input type="number" placeholder=" " />
          </div>
          <div className="expcvv-div">
            <div>
              <label htmlFor="">Expiration Month</label>
              <select value="">
                <option value="A">1</option>
                <option value="A">2</option>
                <option value="A">3</option>
                <option value="A">4</option>
                <option value="A">5</option>
                <option value="A">6</option>
                <option value="A">7</option>
                <option value="A">7</option>
                <option value="A">8</option>
                <option value="A">9</option>
                <option value="A">10</option>
                <option value="A">11</option>
                <option value="A">12</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Expiration Year</label>
              <select value="">
                <option value="A">2022</option>
                <option value="A">2023</option>
                <option value="A">2024</option>
                <option value="A">2025</option>
                <option value="A">2026</option>
                <option value="A">2027</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Security Code </label>
              <input type="number" placeholder=" " />
            </div>
          </div>
          <div className="div-firstand-lastname-maindiv">
            <div className="div-firstand-lastname">
              <label htmlFor="">
                {" "}
                Email
                <input type="text" placeholder=" " />
              </label>
            </div>
            <div className="div-firstand-lastname">
              <label htmlFor=""> Phone Number i</label>
              <input type="number" placeholder=" " />
            </div>
          </div>
          <div className="textdiv-last">
            <p className="yestext">
              YES! Sign me up for Tervis exclusive previews and discounts.
              Tervis will never share or sell your personal information.
            </p>
          </div>
          <div className="shipping-method-div">
            <input type="checkbox" name="Estimate" id="Estimate" />
            <label htmlFor="Estimate">Sign up for Emails</label>
          </div>
          <div className="shipping-method-div">
            <input type="checkbox" name="Estimate" id="Estimate" />
            <label htmlFor="Estimate">Sign up for text messages</label>
          </div>
          <p className="bychecking">
            By checking this box, you agree to receive recurring automated
            promotional and personalized marketing text messages (e.g. cart
            reminders) from Tervis at the cell number used when signing up.
            Consent is not a condition of any purchase. Reply HELP for help and
            STOP to cancel. Msg frequency varies. Msg & data rates may apply.
            View <span>Terms</span> & <span>Policy.</span>
          </p>
          <div className="nextpayment-div">
            <button onClick={()=>{
              alert("You have ordered successfully")
              navTo("/")
            }} >Next: Review Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
