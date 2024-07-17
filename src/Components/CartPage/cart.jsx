import styles from "./cart.module.css";
import CartCard from "../CartCard/CartCard";
import {useDispatch, useSelector} from "react-redux";
import { getFromDbAsync } from "../../Redux/Reducers/productReducer";
import { useEffect } from "react";

function Cart() {
    const dispatch = useDispatch();
    const cartItems=useSelector((state)=>state.productReducer.cartItems);

    useEffect(()=>{
        dispatch(getFromDbAsync());
    },[dispatch]);

    return(
        <div className={styles.cart}>
            <h1>My Cart</h1>
            <div className={styles.priceContainer}>
                    <h3>Summery Order</h3>
                    <span>Total Price: ${20}/-</span>                    
                      <button 
                        type="submit"
                      >Purchase</button>                    
            </div>
            <div className={styles.cartItems}>
                {cartItems.map((item,index)=>(
                   <CartCard product={item} key={index}/>
                ))}
            </div>
            
        </div>
    )
}

export default Cart;