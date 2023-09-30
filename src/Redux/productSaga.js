import { takeEvery, put } from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST,SEARCH_PRODUCT } from "./constant";

function* getProduct() {
    let data = yield fetch('http://localhost:3500/product')
    data = yield data.json()
    yield put({ type: SET_PRODUCT_LIST, data })
}
function* searchProduct(data) {
    let reasult = yield fetch(`http://localhost:3500/product?q=${data.query}`)
    reasult = yield reasult.json()
    yield put({ type: SET_PRODUCT_LIST, data:reasult })
}
function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProduct);
    yield takeEvery(SEARCH_PRODUCT, searchProduct);
}

export default productSaga;