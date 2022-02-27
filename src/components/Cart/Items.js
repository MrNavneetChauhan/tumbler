import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Items = ({
  id,
  itemOptionType,
  itemName,
  itemImg,
  itemPrice,
  quantity,
  itemNo,
  size,
}) => {
  const { removeItem, increment, decrement } = useContext(CartContext);
  const price = Math.floor(itemPrice * quantity);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={itemImg} alt="iamge" />
        </div>

        <div className="title">
          <h2>{itemName}</h2>
          <p>{itemOptionType}</p>
          <p>Itemno : {itemNo}</p>
          <p>Size : {size}oz</p>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => decrement(id)}></i>
          <input type="text" placeholder={quantity} disabled />
          <i className="fas fa-plus add" onClick={() => increment(id)}></i>
        </div>

        <div className="price">
          <h3>${price}</h3>
        </div>

        <div className="remove-item">
          <i className="fa-solid fa-xmark" onClick={() => removeItem(id)}></i>
        </div>
      </div>
    </>
  );
};

export default Items;
