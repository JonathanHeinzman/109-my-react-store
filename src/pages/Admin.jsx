import { useState } from "react";

function Admin() {
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

      <div className="d-flex gap-4">
        <section className="w-50 bg-primary">1</section>

        <section className="w-50">
          <div className="p-4 border rounded bg-white">
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