import { useState } from "react";
import "./QuantityPicker.css";

function QuantityPicker(props) {
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity() {
    let nextVal = quantity + 1;
    setQuantity(nextVal);
    props.onChange(nextVal);  // Notify the parent about the change
  }

  function decreaseQuantity() {
    let nextVal = quantity - 1;
    if (nextVal > 0) {
      setQuantity(nextVal);
      props.onChange(nextVal);  // Notify the parent about the change
    }
  }

//quantity = 1;-- This is an incorrect statement

//setQuantity(2);-- This is the correct way to update the state

  return (
    <div className="quantity-picker">
      <button className="btn-qty" onClick={decreaseQuantity}>-</button>
      <span className="qty-value">{quantity}</span>
      <button className="btn-qty" onClick={increaseQuantity}>+</button>
    </div>
  );
}

export default QuantityPicker;