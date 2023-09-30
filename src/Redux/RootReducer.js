import { combineReducers } from "redux";
import { cartData } from "./Reducer";
import { productData } from "./productReducer";
const rootReducer = combineReducers(
    {
        cartData:cartData,
        productData:productData
    }
    );


export default rootReducer;