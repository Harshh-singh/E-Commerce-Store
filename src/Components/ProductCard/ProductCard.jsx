import styles from './productCard.module.css';

function Card() {
    return(
        <div className={styles.card}>
            <img src="" alt="itemImg" />
            <div>
                <h4>title</h4>
                <span>price</span>
            </div>
            <button type="submit">Add to Cart</button>
            <div className={styles.editBtn}>
                <img src="" alt="edit" />
                <img src="" alt="delete" />
            </div>
        </div>
    )
}

export default Card;