import { useState } from "react";

function Admin() {
  // Products
  const [productTitle, setProductTitle] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [products, setProducts] = useState([]);


  function saveProduct() {
  console.log(productTitle);
  console.log(productCategory);
  console.log(productImage);
  console.log(productPrice);

  const newProduct = {
    title: productTitle,
    category: productCategory,
    image: productImage,
    price: productPrice
  };

  setProducts([...products, newProduct]);

  setProductTitle("");
  setProductCategory("");
  setProductImage("");
  setProductPrice(0);
}



  // Coupon
  const [couponCode, setCouponCode] = useState("")
  const [couponDiscount, setCouponDiscount] = useState(0)
  const [coupons, setCoupons] = useState([])

  function saveCoupon() {
    console.log(couponCode)
    console.log(couponDiscount)

    const newCoupon = {
      code: couponCode,
      discount: couponDiscount
    }

    setCoupons([...coupons, newCoupon])
    
    setCouponCode("")
    setCouponDiscount(0)

  }

  return (
    <div>
      <h1 className="text-center mb-5">Store Administration</h1>
        <div className="d-flex">
          <section className="w-50">
            <div className="p-4 border rounded bg-white shadow-sm">
              <h2>Create Product</h2>

              <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" value={productTitle} onChange={(e) => setProductTitle(e.target.value)} />
              </div>

              <div className="mb-3">
                <label className="form-label">Category</label>
                <input type="text" className="form-control" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} />
              </div>

              <div className="mb-3">
                <label className="form-label">Image (URL)</label>
                <input type="text" className="form-control" value={productImage} onChange={(e) => setProductImage(e.target.value)} />
              </div>

              <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="number" className="form-control" value={productPrice} onChange={(e) => setProductPrice(parseFloat(e.target.value))} />
              </div>

              <div className="text-center">
                <button className="btn btn-dark" onClick={saveProduct}> Save Product </button>
              </div>
            </div>
            <form>
              <h4 className="mb-3"> Products List:
                {products.length === 0 ? (<span className="text-muted ms-2">There are no products</span>) : ("")}
              </h4>
            </form>
            <div className="row g-4">
              {products.map((product) => (
                <div style={{ width: '18rem' }}>
                  <div className="card mb-3">
                    <div>
                      <span className="badge bg-primary position-absolute" style={{ top: "10px", right: "10px" }}> {product.category} </span>
                    </div>
                    <img src={product.image} alt={product.title} className="card-img-top"  style={{ height: "180px", objectFit: "cover" }}/>
                    <div className="card-body d-flex justify-content-between">
                      <h5 className="card-title mb-0">{product.title}</h5>
                      <p className="card-text fw-bold mb-0">${product.price} </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="w-50">
            <div className="p-4 border rounded bg-white">
              <h2>Create Coupon</h2>
              <div className="mb-3">
                <label className="form-label">Code</label>
                <input type="text" className="form-control" value={couponCode} onChange={(e) => setCouponCode(e.target.value)}/>
              </div>

              <div className="mb-3">
                <label className="form-label">Discount</label>
                <input type="number" className="form-control" value={couponDiscount} onChange={(e) => setCouponDiscount(e.target.value)}/>
              </div>

              <div className="text-center">
                <button className="btn btn-dark" onClick={saveCoupon}>Save Coupon</button>
              </div>
            </div>
            <form>
              <h4 className="mb-3"> Coupon List: 
                {coupons.length === 0 ? (<span className="text-muted ms-2">There are no coupons</span>) : ("")}
              </h4>
            </form>

            <ul className='list-group mt-4'>
              { coupons.map(coupon => (
                  <li className='list-group-item'>{coupon.code} - {coupon.discount}% </li>
              ))}
            </ul>

          </section>
        </div>
    </div>
  )
}


export default Admin;