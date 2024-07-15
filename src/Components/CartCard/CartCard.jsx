import styles from './cartCard.module.css';

function CartCard() {
    return(
        <div className={styles.cartCard}>
            <div className={styles.imgContainer}>
                <img src="https://i.pinimg.com/474x/34/45/d3/3445d3483a630a3677e2c17cd7198869.jpg" alt="itemImg" />
            </div>        
            <div className={styles.details}>
                <h3>{'product.name'}</h3>
                <span>${'product.price'}</span>
            </div>
            <button type="submit">Remove From Cart</button>        
        </div>
    )
}

export default CartCard;