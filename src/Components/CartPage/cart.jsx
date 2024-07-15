import styles from "./cart.module.css";
import CartCard from "../CartCard/CartCard";

function Cart() {
    return(
        <div className={styles.cart}>
            <h1>My Cart</h1>
            <div className={styles.priceContainer}>
                    <span>Total Price:- ${20}/-</span>                    
                      <button 
                        type="submit"
                        onClick={'Purchase'}
                      >Purchase</button>                    
            </div>
            <div className={styles.cartItems}>
                <CartCard/>
                <CartCard/>
                <CartCard/>
                <CartCard/>
                <CartCard/>
                <CartCard/>
            </div>
            
        </div>
    )
}

export default Cart;