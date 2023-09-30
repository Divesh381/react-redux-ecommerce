import { useSelector } from "react-redux";

const Cart = () => {
    const cartData = useSelector((state) => state.cartData);
    let amount = cartData.length && cartData.map((item)=>item.price).reduce((prev,next)=>prev+next).toFixed(2);
    let Discount =(amount/10).toFixed(2);

    return (
        <div>
            <div>
                <h1 className="text-center">Cart</h1>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table" border={5}>
                            <thead>
                                <tr>
                                    <th>S.N</th>
                                    <th>Products</th>
                                    <th>Quantity</th>
                                    <th>Price $</th>
                                    <th>Totals Price $</th>
                                    {/* <th>Remove</th> */}
                                </tr>
                            </thead>
                                     {
                                       cartData.map((item, index) => 
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{item.category}</td>
                                            <td>{item.title}</td>   
                                            <td>${item.price}</td>
                                            <td>${item.price}</td>                
                                        </tr>)
                                    
                                    }
                                    <thead>
                                        <tr><td></td><td></td><td></td><td></td><td></td></tr>
                                           <tr>
                                            <td></td><td></td><td></td><td> Total Amount:</td><td>${amount}</td>
                                          </tr>
                                           <tr>
                                            <td></td><td></td><td></td><td >Discount:</td><td>${Discount}</td>
                                          </tr>
                                           <tr>
                                            <td></td><td></td><td></td><td>Total:</td><td>${amount-(Discount)}</td>
                                          </tr>
                                        </thead>                                
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );

}
export default Cart;