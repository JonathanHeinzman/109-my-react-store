import { useState } from 'react'
import GlobalContext from './globalContext'

// GlobalProvider provides real state and logic
function GlobalProvider(props){
    const [cart, setCart] = useState([]) // Create a state variable for the cart
    const [user, setUser] = useState({id: 62, name: "Jonathan"}) // Create a state variable for the user

    function addProductToCart(prod){
        let copy = [...cart] // Creates a copy of the current cart
        copy.push(prod) // Add the new product to the copy
        setCart(copy) // Update the cart state with the new copy
    }
    
    function clearCart(){
        setCart([])
    }

    function removeProductFromCart(productId){
        const updatedCart = cart.filter(item => item._id !== productId)
        setCart(updatedCart)
    }

    return(
        <GlobalContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            clearCart: clearCart,
            removeProductFromCart: removeProductFromCart
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}


export default GlobalProvider