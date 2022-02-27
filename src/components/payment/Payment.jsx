import "./Payment.scss";
export const Payment = ()=>{
    return (
      <div className="payment">
        {/*  */}
        <div className="first">
          <div>
            <label htmlFor="">First Name</label>
            <input required type="text"/>
          </div>
          <div> 
            <label htmlFor="">Last Name</label>
            <input required type="text"/>
          </div>
        </div>
        {/*  */}
        <div className="second" >
          <label htmlFor="">Address 1</label>
          <input required type="text"/>
        </div>
        <div className="second" >
          <label htmlFor="">Address 2 </label>
          <input required type="text"/>
        </div>
        <div className="second" >
          <label htmlFor="">City</label>
          <input required type="text"/>
        </div>
        {/*  */}
  
        <div className="third">
          <div>
            <label htmlFor="">State</label>
            <input required type="text"/>
          </div>
          <div>
            <label htmlFor="">Zip Code</label>
            <input required type="text"/>
          </div>
        </div>
  {/*  */}
  <div>
    <label htmlFor=""> Phone Number</label>
    <input type="text"/>
  </div>
      </div>
    );
  }
  
  