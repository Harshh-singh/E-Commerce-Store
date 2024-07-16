import styles from './detailsPage.module.css';

function DetailsPage() {
    return(
        <div className={styles.detailsCard}>
            <div className={styles.imgContainer}>
                <img src="https://i.pinimg.com/236x/aa/ee/74/aaee744610590d71577c72c84b135d36.jpg" alt="prodImg" />
            </div>
            <div className={styles.aboutProduct}>
                <h2>SmartWatch</h2>
                <span>$199</span>
                <div className={styles.editbtn}>
                    <span>Edit</span>
                    <img src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png" alt="edit" /> 
                </div>
            </div>
            <div className={styles.productDetails}>
                <span>
                Smartwatch with fitness tracking and heart rate monitoring
                </span>
                <div className={styles.deletebtn}>
                    <span>Delete</span>
                    <img src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" alt="edit" /> 
                </div>
            </div>
        </div>
    )
}
export default DetailsPage;