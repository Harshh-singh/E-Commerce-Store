import styles from './allproducts.module.css';
import Card from '../ProductCard/ProductCard';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProductsAsync } from '../../Redux/Reducers/productReducer';

function AllProducts() {
    const dispatch = useDispatch();
    const { products } = useSelector((state)=>state.productReducer);

    useEffect(()=>{
        dispatch(getProductsAsync());     
    },[dispatch]);

    return(
        <div className={styles.productsPage}>
            <button type="submit">Sort by price</button>
            <div className={styles.allProducts}>
                {products.map((product,index)=>(
                    <Card product={product} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default AllProducts;