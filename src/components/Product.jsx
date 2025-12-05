import { useState, useContext } from "react";
import GlobalContext from "../state/globalContext"
import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props) {
  const globalAdd = useContext(GlobalContext).addProductToCart
  const [quantity, setQuantity] = useState(1);

  function handleQuantityChange(qty) {
    setQuantity(qty);
  }

  function getTotal() {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  }

  function onAdd() {
    console.log(props.data)
    let fixedProduct = {...props.data}
    fixedProduct.quantity = quantity
    globalAdd(fixedProduct)
  }

  return (
    <div className="product-card">
      <img 
        className="product-image" 
        src={props.data.image} 
        alt={props.data.name} 
      />
      <div className="product-details">
        <span className="product-category">{props.data.category}</span>
        <h3 className="product-name">{props.data.name}</h3>
        <p className="product-price">${props.data.price.toFixed(2)}</p>
      </div>
      <div className="product-actions">
        <QuantityPicker onChange={handleQuantityChange} />
        <div className="product-total">
          <span>Total: </span>
          <strong>${getTotal()}</strong>
        </div>
      </div>
      <div className="text-center mb-2">
        <button onClick= {onAdd} className="rounded-3">Add</button>
      </div>
    </div>
  );
}

export default Product;