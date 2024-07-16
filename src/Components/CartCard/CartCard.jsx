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

                <div className={styles.quantity}>
                    <img src="https://cdn-icons-png.flaticon.com/128/1828/1828899.png" alt="minus" className={styles.incImg}/>
                    <span>{2}</span>
                    <img src="https://cdn-icons-png.flaticon.com/128/1828/1828919.png" alt="plus" className={styles.incImg}/>
                </div>
            </div>
            <button type="submit">Remove From Cart</button>        
        </div>
    )
}

export default CartCard;