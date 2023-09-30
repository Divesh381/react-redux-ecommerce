import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {

    switch (action.type) {
        case ADD_TO_CART:
            // console.warn("ADD_TO_CART condition ", action);
            return [action.data, ...data];
        case REMOVE_FROM_CART:
            // console.warn(" REMOVE_FROM_CART condition ", action);

            // data.length = data.length ? data.length - 1 : [];
            // let newdata=data.slice(0,-1)
           
            console.log(action.data)
            const remainingItem = data.filter((item)=>item.id !== action.data)
            // console.log("RemainingItem", remainingItem)
            return [...remainingItem ];
            // return [...data];
        case EMPTY_CART:
            // console.warn(" EMPTY_CART condition ", action);
            data = []
            return [...data];
        default:
            return data;
    }

}