import {Link} from 'react-router-dom'
import styles from './WhiteBtn.module.css'

const WhiteBtn = ({compHeight="32px", isLink=false, children, ...props }) => {
    if (isLink) {
        return (
            <Link 
                style={{ height: compHeight, display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
                className={styles.white_btn} 
                {...props}
            >
                <p className={styles.white_btn__text}>{children}</p>
            </Link>
        );
    } else {
            return (
                <button style={{heigth: {compHeight}}} className={styles.white_btn}>
                    <p className={styles.white_btn__text}>{children}</p>
                </button>
            )
    }
}

export default WhiteBtn; 