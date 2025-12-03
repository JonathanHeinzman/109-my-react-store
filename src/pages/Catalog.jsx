import { useState, useEffect } from "react";
import Product from "../components/Product";
import DataService from "../services/DataService";
import "./Catalog.css";

function Catalog() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [prodsToDisplay, setProdsToDisplay] = useState([]);

  useEffect(() => {
    loadCatalog();
  }, []);

  function loadCatalog() {
    let service = new DataService();
    let data = service.getProducts();
    setProducts(data);
    setProdsToDisplay(data);

    let cats = ["Fruit", "Dairy & Eggs", "Candy"];
    setCategories(cats);
  }

  function clearFilter() {
    setProdsToDisplay(products);
  }

  function filter(category) {
    let list = [];
    for (let i = 0; i < products.length; i++) {
      let prod = products[i];
      if (prod.category === category) {
        list.push(prod);
      }
    }
    setProdsToDisplay(list);
  }

  return (
    <div className="catalog">
      <h2 className="catalog-title">Our Products</h2>
      
      <div className="filters">
        <button onClick={clearFilter} className="btn-filter btn-all">All</button>
        {categories.map(cat => (
          <button 
            key={cat} 
            onClick={() => filter(cat)} 
            className="btn-filter"
          >
            {cat}
          </button>
        ))}
      </div>
      
      <hr className="divider" />
      
      <div className="product-list">
        {prodsToDisplay.map(prod => (
          <Product key={prod._id} data={prod} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;