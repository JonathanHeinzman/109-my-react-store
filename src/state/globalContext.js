import { createContext } from "react";

// GlobalContext defines context structure
const GlobalContext = createContext({
    cart: [], // Default cart is an empty array; this will hold products later.
    user: {}, // Default user is an empty object; can store user information like, name, email, age.

    addProductToCart: () => {}, //Placeholder function to add a product to the cart.
    clearCart: () => {}, // Placeholder function to remobe all items from the cart.
    removeProductFromCart: () => {} // Placeholder function to remove a specific item from the cart
})

// Export the context so it can be used in other components
export default GlobalContext