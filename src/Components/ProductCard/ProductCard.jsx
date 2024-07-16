import styles from './productCard.module.css';
import { useNavigate } from 'react-router-dom';

function Card({product}) {
    const navigate = useNavigate();

    const redirect = (link)=>{
        navigate(link);
    }

    return(
        <div className={styles.card} onClick={()=>redirect("/productDetails")}>
            <div className={styles.imgContainer}>
                <img src={product.image} alt="itemImg" />
            </div>        
            <div className={styles.details}>
                <h3>{product.name}</h3>
                <span>${product.price}</span>
            </div>
            <button type="submit">Add to Cart</button>
            <div className={styles.editBtn}>
                <img src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png" alt="edit" />
                <img src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png" alt="delete" />
            </div>
        </div>
    )
}

export default Card;