import { RiShoppingCartFill} from "react-icons/ri";
import { RiHome8Line} from "react-icons/ri";
import "./custom.css";
import { useSelector,useDispatch } from 'react-redux';
import {Link} from "react-router-dom"
import { productSearch } from "../Redux/productAction";


  const Header =()=> {
    const reasult =useSelector((state)=>state.cartData);
    const dispatch =useDispatch();
    // console.log("redux data in header ",reasult); 
    return (
        <>
          <div className='container-fluid text-white bg-secondary'>
                <nav className="navbar navbar-expand-lg navbar-light pt-0">
                    <div className="container-fluid ">
                        <Link className="navbar-brand text-white"  to="main" style={{fontSize:'34px'}} > Product sell </Link>
                        <div className="mb-3">

                           <input type="search" className="form-control mt-3" onChange={(event)=>dispatch(productSearch(event.target.value))} style={{width: '500px' }} id="searchHeader" placeholder="search.."/>
                        </div>
                        <div className=" float-end m-100 " style={{fontSize:'26px'}} >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active text-white" aria-current="page" to="main">Home <RiHome8Line style={{width:"25px", height:"25px"}}/></Link>
                                </li>
                                <li className="nav-item">
                                    <span className='element-cart'>{reasult.length}</span>
                                    <Link className="nav-link text-white" to="cart">Shell<RiShoppingCartFill style={{width:"40px", height:"40px"}}/> </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
               
            </div>          
            </>
      
    )
  
}

export default Header
