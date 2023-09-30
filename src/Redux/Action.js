 import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant"

 export const addToCart = (data) =>{
    // console.warn("Action called",data)
    return {
        type: ADD_TO_CART,
        data:data
    }
}
 export const removeFromCart = (data) =>{
    // console.warn("Action remove from cart called",data)
    return {
        type:  REMOVE_FROM_CART,
        data:data
    }
}
 export const emptyCart = (data) =>{
    // console.warn("Action remove from cart called",data)
    return {
        type:  EMPTY_CART,
        data:data
    }
}
