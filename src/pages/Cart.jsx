import { useContext } from 'react'
import GlobalContext from '../state/globalContext'

function Cart() {
    const cart = useContext(GlobalContext).cart

    function getTotalItems() {
        let sum = 0;

        for(let i=0; i<cart.length; i++) {
            sum = sum + cart[i].quantity;
        }

        return sum
    }
    
    function getTotalPrice() {
        let total = 0

        for(let i=0; i<cart.length; i++) {
            total+= cart[i].price * cart[i].quantity
        }
        
        return total
    }

    return (
        <div>
            <h3>Are you ready to complete your purchase?</h3>    
            
            {cart.map(product => 
                <section width = "75%"  >
                    <div className='border bg-white mb-4 p-4 d-flex justify-content-between align-items-center' key={product._id}>
                        <img width={150} src={product.image} alt="" />
                        <h2>{product.name}</h2>
                        <div className='badge text-bg-dark'>{product.category}</div>
                        <div>Price: ${product.price}</div>
                        <label>QTY: {product.quantity}</label>
                        <label>Total: ${product.price * product.quantity}</label>
                    </div>
                </section>
            )}
            <div width = "15% d-flex">
                <h3>You have {getTotalItems()} Products in your cart</h3>
                <h4>Total: <strong>${getTotalPrice()}</strong></h4>
            </div>


        </div>
    )
}


export default Cart