import { addToCart, emptyCart, removeFromCart } from '../Redux/Action';
import { useDispatch } from 'react-redux';
import { productList } from '../Redux/productAction';
import { useSelector } from 'react-redux';
import "./custom.css";
import { useEffect } from 'react';


function Main() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.productData)
  // console.warn("data in main component from saga", data)
  
  useEffect(() => {
    dispatch(productList())
  }, [dispatch])


  return (
    <>

      <div className="app text-center mt-2">
        <button className='' onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
          <div className="containerDiv align-top">
        {
          data.map((item, index) =>

            <div className="productList card " key={index}>
              <img className="imgData" src={item.image} alt='/'   />
              <div>Id: {item.id}</div>
              <div>Title: {item.title}</div>
              <div>Categor: {item.category}</div>
              <div>Price: ${item.price}</div>
              {/* <div>{item.name}</div> */}
              <div>
                <button onClick={() => dispatch(addToCart(item))}>Add to cart</button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>Remove to cart</button>
              </div>
            </div>

          )}
      </div>
    </>
  );
}

export default Main;
