import styles from './cartCard.module.css';

function CartCard({product}) {
    return(
        <div className={styles.cartCard}>
            <div className={styles.imgContainer}>
                <img src={product.image} alt={product.name} />
            </div>        
            <div className={styles.details}>
                <h3>{product.name}</h3>
                <span>${product.price}</span>

                <div className={styles.quantity}>
                    <img src="https://cdn-icons-png.flaticon.com/128/1828/1828899.png" alt="minus" className={styles.incImg}/>
                    <span>{product.quantity}</span>
                    <img src="https://cdn-icons-png.flaticon.com/128/1828/1828919.png" alt="plus" className={styles.incImg}/>
                </div>
            </div>
            <button type="submit">Remove From Cart</button>        
        </div>
    )
}

export default CartCard;