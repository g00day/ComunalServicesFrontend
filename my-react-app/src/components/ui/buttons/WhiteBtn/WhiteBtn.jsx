import {Link} from 'react-router-dom'
import styles from './WhiteBtn.module.css'

const WhiteBtn = ({compHeight="32px", isLink=false, children, ...props }) => {
    if (isLink) {
        return (
            <Link 
                style={{ height: compHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }} 
                
                {...props}
            >
                <button className={styles.white_btn} >
                    <p className={styles.white_btn__text}>{children}</p>
                </button>
            </Link>
        );
    } else {
            return (
                <button className={styles.white_btn}>
                    <p className={styles.white_btn__text}>{children}</p>
                </button>
            )
    }
}

export default WhiteBtn; 