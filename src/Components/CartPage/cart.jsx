import styles from "./cart.module.css";
import CartCard from "../CartCard/CartCard";
import {useDispatch, useSelector} from "react-redux";
import { getFromDbAsync, purchaseOrderAsync } from "../../Redux/Reducers/productReducer";
import { useEffect, useState } from "react";

function Cart() {
    const dispatch = useDispatch();
    const cartItems=useSelector((state)=>state.productReducer.cartItems);
    const [totalPrice,setTotalPrice]=useState(0);

    // to get total price of our cart
    useEffect(()=>{
        let newTotalPrice=0;
        cartItems.forEach(item=>{
            newTotalPrice+=item.price * item.quantity;
       })
       setTotalPrice(newTotalPrice);
    },[cartItems]);

    // to get all cart items
    useEffect(()=>{
        dispatch(getFromDbAsync());
    },[dispatch]);

    // to purchase cart item
    const handlePurchase = () => {
        dispatch(purchaseOrderAsync());
    }


    return(
        <div className={styles.cart}>
            <h1>My Cart</h1>
            <div className={styles.priceContainer}>
                    <h3>Summery Order</h3>
                    <span>Total Price: ${totalPrice.toFixed(2)}/-</span>                    
                      <button 
                        type="submit"
                        onClick={()=>handlePurchase()}
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