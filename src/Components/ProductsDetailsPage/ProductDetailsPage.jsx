import styles from './detailsPage.module.css';
import { useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCartAsync } from '../../Redux/Reducers/productReducer';

function DetailsPage() {
    const loaction = useLocation();
    const product = loaction.state;
    const dispatch = useDispatch();

    const handleCart=(product)=>{
        dispatch(addToCartAsync(product));
    }

    return(
        <div className={styles.detailsCard}>
            <div className={styles.imgContainer}>
                <img src={product.image} alt={product.name} />
            </div>
            <div className={styles.aboutProduct}>
                <div className={styles.nameContainer}><h2>{product.name}</h2></div>
                <span>${product.price}</span>
                <div className={styles.editbtn}>
                    <span>Edit</span>
                    <img src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png" alt="edit" /> 
                </div>
            </div>
            <div className={styles.productDetails}>
                <span>
                    {product.description}
                </span>
                <div className={styles.deleteAddBtn}>
                    <div className={styles.btn}>
                        <span>Delete</span>
                        <img src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" alt="delete" /> 
                    </div>
                    <div className={styles.btn}
                    onClick={()=>handleCart(product)}>
                        <span>Cart</span>
                        <img src="https://cdn-icons-png.flaticon.com/128/4903/4903482.png" alt="cart" /> 
                    </div>

                </div>
            </div>
        </div>
    )
}
export default DetailsPage;